"use client";
import React, {useRef, useState, useEffect} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import "./threetext.css";

const vertexShader = `
  attribute float size;
  attribute vec3 customColor;
  varying vec3 vColor;
  void main() {
    vColor = customColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 color;
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(color * vColor, 1.0);
    gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
  }
`;

function Particles({fontUrl, particleUrl, canvasRef}) {
  const particlesRef = useRef();
  const planeRef = useRef();
  const geometryCopyRef = useRef();
  const [font, setFont] = useState(null);
  const [particleTexture, setParticleTexture] = useState(null);
  const mouse = useRef(new THREE.Vector2(-200, 200));
  const raycaster = useRef(new THREE.Raycaster());
  const [isMouseDown, setIsMouseDown] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const data = {
    text: "   Your Future...\nOur Intelligence",
    amount: isMobile ? 1000 : 1500,
    particleSize: 1,
    // textSize: 30,
    textSize: isMobile ? 30 : 40,
    area: isMobile ? 1500 : 2500,
    ease: 0.05,
  };

  useEffect(() => {
    new FontLoader().load(fontUrl, setFont);
    new THREE.TextureLoader().load(particleUrl, setParticleTexture);
  }, [fontUrl, particleUrl]);

  useEffect(() => {
    if (!font || !particleTexture || !particlesRef.current) return;
    const shapes = font.generateShapes(data.text, data.textSize);
    const geometry = new THREE.ShapeGeometry(shapes);
    geometry.center();
    const thePoints = [],
      colors = [],
      sizes = [];
    shapes.forEach((shape) => {
      const points = shape.getSpacedPoints(
        shape.type === "Path" ? data.amount / 2 : data.amount
      );
      points.forEach((point, index) => {
        thePoints.push(new THREE.Vector3(point.x, point.y, 0));
        const isBlue = index % 2 === 0;
        colors.push(isBlue ? 0 : 1, isBlue ? 0 : 1, isBlue ? 1 : 1);
        sizes.push(1);
      });
    });
    const geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
    geoParticles.translate(
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x),
      (geometry.boundingBox.max.y - geometry.boundingBox.min.y) / 2.85,
      0
    );
    geoParticles.setAttribute(
      "customColor",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    geoParticles.setAttribute(
      "size",
      new THREE.Float32BufferAttribute(sizes, 1)
    );
    particlesRef.current.geometry = geoParticles;
    particlesRef.current.material = new THREE.ShaderMaterial({
      uniforms: {
        color: {value: new THREE.Color(0xffffff)},
        pointTexture: {value: particleTexture},
      },
      vertexShader,
      fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });
    geometryCopyRef.current = new THREE.BufferGeometry().copy(geoParticles);
  }, [font, particleTexture]);

  useFrame(({camera}) => {
    if (!particlesRef.current || !geometryCopyRef.current || !planeRef.current)
      return;
    const pos = particlesRef.current.geometry.attributes.position;
    const copy = geometryCopyRef.current.attributes.position;
    const colors = particlesRef.current.geometry.attributes.customColor;
    const sizes = particlesRef.current.geometry.attributes.size;
    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObject(planeRef.current);
    if (intersects.length > 0) {
      const {point} = intersects[0],
        mx = point.x,
        my = point.y;
      const colorChange = new THREE.Color(),
        time = ((0.001 * performance.now()) % 12) / 12,
        zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;
      for (let i = 0; i < pos.count; i++) {
        const initX = copy.getX(i),
          initY = copy.getY(i);
        let px = pos.getX(i),
          py = pos.getY(i),
          pz = pos.getZ(i);
        colorChange.setHSL(0.5, 1, 1);
        colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
        sizes.array[i] = data.particleSize;
        const dx = mx - px,
          dy = my - py,
          mouseDistance = Math.sqrt(dx * dx + dy * dy),
          f = -data.area / (dx * dx + dy * dy);
        if (isMouseDown) {
          const t = Math.atan2(dy, dx);
          px -= f * Math.cos(t);
          py -= f * Math.sin(t);
          colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
          colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
        } else if (mouseDistance < data.area) {
          const t = Math.atan2(dy, dx);
          if (i % 5 === 0) {
            px -= 0.03 * Math.cos(t);
            py -= 0.03 * Math.sin(t);
            colorChange.setHSL(0.15, 1.0, 0.5);
            colors.setXYZ(i, colorChange.r, colorChange.g, colorChange.b);
            sizes.array[i] = data.particleSize / 1.2;
          } else {
            px += f * Math.cos(t);
            py += f * Math.sin(t);
            sizes.array[i] = data.particleSize * 1.3;
          }
        }
        px += (initX - px) * data.ease;
        py += (initY - py) * data.ease;
        pos.setXYZ(i, px, py, pz);
        pos.needsUpdate = colors.needsUpdate = sizes.needsUpdate = true;
      }
    }
  });

  useEffect(() => {
    const handleTouchMouse = (e, down, isTouchEnd = false) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      let clientX, clientY;

      if (isTouchEnd && e.changedTouches) {
        // For touchend, use changedTouches instead of touches
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } else if (e.touches && e.touches.length > 0) {
        // For touchstart and touchmove
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // For mouse events
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      mouse.current.x = (x / rect.width) * 2 - 1;
      mouse.current.y = -(y / rect.height) * 2 + 1;
      if (down !== undefined)
        setIsMouseDown(down), (data.ease = down ? 0.01 : 0.05);
    };

    // Mouse events
    const handleMouseMove = (e) => handleTouchMouse(e);
    const handleMouseDown = (e) => handleTouchMouse(e, true);
    const handleMouseUp = (e) => handleTouchMouse(e, false);

    // Touch events
    const handleTouchStart = (e) => {
      handleTouchMouse(e, true);
      e.preventDefault();
    };
    const handleTouchMove = (e) => {
      handleTouchMouse(e);
      e.preventDefault();
    };
    const handleTouchEnd = (e) => {
      handleTouchMouse(e, false, true); // Pass isTouchEnd flag
      e.preventDefault();
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mousedown", handleMouseDown);
      canvas.addEventListener("mouseup", handleMouseUp);
      canvas.addEventListener("touchstart", handleTouchStart, {passive: false});
      canvas.addEventListener("touchmove", handleTouchMove, {passive: false});
      canvas.addEventListener("touchend", handleTouchEnd, {passive: false});
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mousedown", handleMouseDown);
        canvas.removeEventListener("mouseup", handleMouseUp);
        canvas.removeEventListener("touchstart", handleTouchStart);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [canvasRef]);

  return (
    <>
      <points ref={particlesRef} />
      <mesh ref={planeRef} visible={false}>
        <planeGeometry args={[1000, 1000]} />
        <meshBasicMaterial color={0x00ff00} transparent />
      </mesh>
    </>
  );
}

function Threetext() {
  const canvasRef = useRef();

  return (
    <div id="magic">
      <Canvas ref={canvasRef} camera={{position: [0, 0, 150], fov: 85}}>
        <Particles
          fontUrl="https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json"
          particleUrl="https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png"
          canvasRef={canvasRef}
        />
      </Canvas>
    </div>
  );
}

export default Threetext;
