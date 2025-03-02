"use client"; // Ensures this is a Client Component
import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

const NumberCard = ({heading, heading2, para}) => {
  const [count, setCount] = useState(0); // State to track the animated number
  const ref = useRef(null); // Ref to observe the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(heading); // Convert heading to number
          if (isNaN(end)) return; // Exit if not a number

          const duration = 2000; // 1 second total duration
          const increment = Math.max(1, Math.floor(end / 100)); // Adjust increment for smoother steps
          const stepTime = duration / (end / increment); // Time per step, adjusted for 1 second

          const timer = setInterval(() => {
            start += increment; // Increase by calculated increment
            if (start >= end) {
              setCount(end); // Ensure it ends exactly at the target
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);

          observer.disconnect(); // Stop observing after animation starts
        }
      },
      {threshold: 1} // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [heading]);

  return (
    <StyledWrapper ref={ref}>
      <div className="m2">
        <div className="flex">
          <h1>{count}</h1>
          <h1>{heading2}</h1>
        </div>
        <p>{para}</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .m2 {
    position: relative;
    width: 20vmin;
    height: 20vmin;
    background: linear-gradient(135deg, #1e1e24 10%, #050505 60%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    animation: gradient-shift 5s ease-in-out infinite;
    background-size: 200% 200%;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 4vmin;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      text-align: center;
    }

    p {
      margin: 0.5vmin 0 0;
      padding: 0;
      font-size: 2vmin;
      font-weight: 400;
      color: #e0e0e0;
      text-align: center;
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
