import { industries } from "@/data/industries";
import React from "react";
import OnBoardingForm from "./_components/OnBoardingForm";

const OnboardingPage = () => {
  return (
    <div>
      <OnBoardingForm industries={industries}/>
    </div>
  );
};

export default OnboardingPage;
