"use client";
import React from "react";
import styled from "styled-components";

const FeaturesSectionCard = ({heading, views}) => {
  return (
    <StyledWrapper>
      <div className="outer">
        {/* <div className="dot" /> */}
        <div className="card">
          <div className="ray" />
          <h2 className="heading">{heading}</h2>
          <p className="views">{views}</p>
          <div className="line topl" />
          <div className="line leftl" />
          <div className="line bottoml" />
          <div className="line rightl" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .outer {
    width: 200px;
    height: 250px;
    border-radius: 10px;
    padding: 1px;
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 10s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 25px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 25px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(
      circle 0 at 0% 0%,
      rgba(68, 68, 68, 0.8),
      rgba(12, 13, 13, 0.4)
    ); /* Added transparency with rgba */
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;
  }

  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 50 50 10px #fff;
    filter: blur(35px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .heading {
    font-weight: bolder;
    font-size: 1.1rem;
    background: linear-gradient(35deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
    padding-top: 25px;
    width: 80%;
    text-align: center;
  }

  .views {
    font-size: 0.7rem;
    color: #fff;
    margin: 0;
    padding-top: 8px;
    width: 70%;
    text-align: center;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }
`;

export default FeaturesSectionCard;
