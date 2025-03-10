"use client";
import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span>&lt;</span>
        <span>LOADING...</span>
        <span>/&gt;</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  // width: 100vw;
  background-color: black; /* Optional: for better contrast */

  .loader {
    font-size: 2em;
    font-weight: 900;
    display: flex;
    gap: 8px;
  }

  .loader > * {
    color: white; /* Change text color to white */
  }

  .loader span {
    display: inline-flex;
  }

  .loader span:nth-child(2) {
    letter-spacing: -1em;
    overflow: hidden;
    animation: reveal 2000ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite alternate;
  }

  @keyframes reveal {
    0%,
    100% {
      opacity: 0.5;
      letter-spacing: -1em;
    }
    50% {
      opacity: 1;
      letter-spacing: 10px;
    }
  }
`;

export default Loader;
