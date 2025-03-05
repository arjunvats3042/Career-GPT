"use client";
import Link from "next/link";
import Threetext from "./threetext";
import {Button} from "./ui/button";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import banner1 from "../public/banner.jpg";
import banner2 from "../public/banner2.webp";
import banner3 from "../public/banner3.webp";
import banner4 from "../public/banner4.webp";
import banner5 from "../public/banner5.webp";
import banner6 from "../public/banner6.webp";
import banner7 from "../public/banner7.webp";

const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner7];

const HeroSection = () => {
  const imageRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageRef.current.classList.add("scrolled");
      } else {
        imageRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Image slideshow effect with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % banners.length);
        setFade(true); // Fade in the new image
      }, 500); // Half of the transition duration
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full pt-16 md:pt-24 pb-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* ThreeText as Heading */}
          <div className="w-full max-w-6xl">
            <Threetext />
          </div>

          {/* Paragraph */}
          <p className="max-w-2xl">
            Take your career to new heights with expert guidance, strategic
            interview preparation, polished resume building, and AI-powered
            tools for job success.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-8">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 w-full md:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-8 w-full md:w-auto"
                variant="outline"
              >
                Some Other Button
              </Button>
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper mt-8 md:mt-0 relative">
          <div ref={imageRef} className="hero-image relative">
            {/* Black Gradient Overlay
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black to-transparent opacity-60 rounded-lg"></div> */}

            {/* Hero Image */}
            <Image
              src={banners[currentImageIndex]}
              alt={`Hero Image ${currentImageIndex + 1}`}
              width={1024}
              height={576}
              className={`rounded-lg shadow-2xl border mx-auto mt-8 transition-opacity duration-1000 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
