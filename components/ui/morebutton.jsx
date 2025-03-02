import React from "react";
import styled from "styled-components";

const MoreButton = ({onClick, label}) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className="cta">
        <span className="hover-underline-animation">{label}</span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem" // Changed to rem for scalability
          height="0.625rem"
          viewBox="0 0 46 16"
          fill="white"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .cta span {
    padding-bottom: 0.4375rem; /* 7px / 16 = 0.4375rem */
    letter-spacing: 0.25rem; /* 4px / 16 = 0.25rem */
    font-size: 0.75rem; /* 12px / 16 = 0.75rem */
    padding-right: 0.9375rem; /* 15px / 16 = 0.9375rem */
    text-transform: uppercase;
    color: white;
  }

  .cta svg {
    transform: translateX(-0.5rem); /* 8px / 16 = -0.5rem */
    transition: transform 0.3s ease;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active svg {
    transform: scale(0.9);
  }

  .hover-underline-animation {
    position: relative;
    padding-bottom: 0.4375rem;
  }

  .hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 0.125rem; /* 2px / 16 = 0.125rem */
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 640px) {
    /* Mobile screens */
    .cta span {
      font-size: 0.625rem; /* 10px for smaller screens */
      letter-spacing: 0.1875rem; /* 3px */
      padding-right: 0.625rem; /* 10px */
    }

    .cta svg {
      width: 1.25rem; /* Slightly smaller arrow */
      height: 0.5rem;
      transform: translateX(-0.375rem); /* 6px */
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    /* Tablet screens */
    .cta span {
      font-size: 0.6875rem; /* 11px */
      letter-spacing: 0.21875rem; /* 3.5px */
      padding-right: 0.75rem; /* 12px */
    }

    .cta svg {
      width: 1.375rem;
      height: 0.5625rem;
    }
  }
`;

export default MoreButton;
