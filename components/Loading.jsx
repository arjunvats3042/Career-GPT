"use client";
import React, {useState, useEffect} from "react";
import {MultiStepLoader as Loader} from "./ui/multi-step-loader";

const loadingStates = [
  {text: "Analyzing your profile..."},
  {text: "Scanning industry trends..."},
  {text: "Finding top career paths..."},
  {text: "Optimizing your resume..."},
  {text: "Preparing AI insights..."},
];



export function Loading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
  );
}
