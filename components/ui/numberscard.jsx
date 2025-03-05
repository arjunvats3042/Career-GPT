"use client";
import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

const NumberCard = ({heading, heading2, para}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false); // Track if animation has run

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset count to 0 when entering viewport
          setCount(0);
          hasAnimated.current = false;

          let start = 0;
          const end = parseInt(heading);
          if (isNaN(end)) return;

          const duration = 1000;
          const increment = Math.max(1, Math.floor(end / 100));
          const stepTime = duration / (end / increment);

          // Clear any existing interval
          const existingTimer = ref.current.timer;
          if (existingTimer) {
            clearInterval(existingTimer);
          }

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
              hasAnimated.current = true;
            } else {
              setCount(start);
            }
          }, stepTime);

          // Store timer reference
          ref.current.timer = timer;
        } else if (hasAnimated.current) {
          // Reset count when leaving viewport after animation
          setCount(0);
        }
      },
      {threshold: 0.5}
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
        if (ref.current.timer) {
          clearInterval(ref.current.timer);
        }
      }
    };
  }, [heading]);

  return (
    <StyledWrapper ref={ref}>
      <div className="m2">
        <div className="flex items-center">
          <h1>{count}</h1>
          <h1>{heading2}</h1>
        </div>
        <p>{para}</p>
      </div>
    </StyledWrapper>
  );
};

// Keep your existing StyledWrapper unchanged
const StyledWrapper = styled.div`
  .m2 {
    position: relative;
    width: clamp(120px, 20vmin, 200px);
    height: clamp(120px, 20vmin, 200px);
    background: linear-gradient(135deg, #1e1e24 10%, #050505 60%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    animation: gradient-shift 5s ease-in-out infinite;
    background-size: 200% 200%;
    border-radius: 8px;
    padding: 1rem;

    h1 {
      margin: 0;
      padding: 0;
      font-size: clamp(2rem, 4vmin, 3rem);
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;

      &:last-child {
        margin-left: 0.25rem;
      }
    }

    p {
      margin: 0.5rem 0 0;
      padding: 0;
      font-size: clamp(0.875rem, 2vmin, 1.25rem);
      font-weight: 400;
      color: #e0e0e0;
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    .m2 {
      width: clamp(100px, 18vmin, 150px);
      height: clamp(100px, 18vmin, 150px);
    }
  }

  .m2::before,
  .m2::after {
    --size: 5px;
    content: "";
    position: absolute;
    top: calc(var(--size) / -2);
    left: calc(var(--size) / -2);
    width: calc(100% + var(--size));
    height: calc(100% + var(--size));
    background: radial-gradient(circle at 100% 0, #00a6ff, transparent);
  }

  .m2::after {
    --size: 2px;
    z-index: -1;
  }

  .m2::before {
    --size: 10px;
    z-index: -2;
    filter: blur(2vmin);
    animation: blur-animation 3s ease-in-out alternate infinite;
  }

  @keyframes blur-animation {
    to {
      filter: blur(3vmin);
      transform: scale(1.25);
    }
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default NumberCard;
