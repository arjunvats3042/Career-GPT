"use client";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper id="loader-wrapper">
      <div className="hacker-loader">
        <div className="loader-text">
          <span data-text="Initializing..." className="text-glitch">
            Initializing...
          </span>
        </div>
        <div className="loader-bar">
          <div className="bar-fill" />
          <div className="bar-glitch" />
        </div>
        <div className="particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
  z-index: 9999;

  .hacker-loader {
    position: relative;
    width: clamp(15rem, 50vw, 24rem);
    height: clamp(4rem, 15vw, 6rem);
    background-color: #0a0a0a;
    border: 0.2rem solid #00ffff;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow: hidden;
    box-shadow: 0 0 1rem rgba(0, 255, 255, 0.3);
  }

  .loader-text {
    text-align: center;
    margin-bottom: 1rem;
  }

  .text-glitch {
    color: #00ffff;
    font-family: monospace;
    font-size: clamp(1rem, 3vw, 1.5rem);
    position: relative;
    display: inline-block;
  }

  .text-glitch::before,
  .text-glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0a0a0a;
    clip: rect(0, 0, 0, 0);
  }

  .text-glitch::before {
    left: -0.1rem;
    text-shadow: 0.1rem 0 #ff00ff;
    animation: glitch-effect 3s infinite linear alternate-reverse;
  }

  .text-glitch::after {
    left: 0.1rem;
    text-shadow: -0.1rem 0 #00ffff;
    animation: glitch-effect 2s infinite linear alternate-reverse;
  }

  .loader-bar {
    width: 100%;
    height: 0.5rem;
    background-color: #003333;
    border-radius: 0.25rem;
    position: relative;
    overflow: hidden;
  }

  .bar-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #00ffff;
    animation: bar-fill-animation 2s infinite ease-in-out;
  }

  .bar-glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(0, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 200%;
    animation: bar-glitch-animation 2s infinite linear;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    background-color: #00ffff;
    border-radius: 50%;
    opacity: 0;
    animation: particle-animation 2s infinite linear;
  }

  .particle:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }
  .particle:nth-child(2) {
    top: 30%;
    left: 60%;
    animation-delay: 0.5s;
  }
  .particle:nth-child(3) {
    top: 70%;
    left: 30%;
    animation-delay: 1s;
  }
  .particle:nth-child(4) {
    top: 90%;
    left: 90%;
    animation-delay: 1.5s;
  }
  .particle:nth-child(5) {
    top: 50%;
    left: 50%;
    animation-delay: 2s;
  }

  @keyframes glitch-effect {
    0% {
      clip: rect(42px, 9999px, 44px, 0);
    }
    5% {
      clip: rect(12px, 9999px, 59px, 0);
    }
    /* ... rest of keyframes ... */
    100% {
      clip: rect(4px, 9999px, 91px, 0);
    }
  }

  @keyframes bar-fill-animation {
    0%,
    100% {
      width: 0;
    }
    50% {
      width: 100%;
    }
  }

  @keyframes bar-glitch-animation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes particle-animation {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate(clamp(1rem, 2vw, 2rem), clamp(1rem, 2vw, 2rem));
    }
  }

  @media (max-width: 768px) {
    .hacker-loader {
      width: clamp(18rem, 70vw, 22rem);
      height: clamp(5rem, 18vw, 7rem);
      padding: 1.2rem;
    }
    .text-glitch {
      font-size: clamp(1.2rem, 4vw, 1.8rem);
    }
    .loader-bar {
      height: 0.6rem;
    }
    .particle {
      width: 0.25rem;
      height: 0.25rem;
    }
  }

  @media (max-width: 480px) {
    .hacker-loader {
      width: clamp(20rem, 85vw, 24rem);
      height: clamp(6rem, 22vw, 8rem);
      padding: 1.5rem;
      border-width: 0.25rem;
    }
    .text-glitch {
      font-size: clamp(1.4rem, 5vw, 2rem);
    }
    .loader-bar {
      height: 0.7rem;
    }
    .particle {
      width: 0.3rem;
      height: 0.3rem;
    }
  }
`;

export default Loader;
