import React from "react";
import FeaturesSectionCard from "./FeaturesSectionCard";
import NumberCard from "./ui/numberscard";

const FeaturesSection = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        <FeaturesSectionCard
          heading="AI-Enhanced Career Guidance"
          views="Receive tailored career counsel and insights, seamlessly driven by cutting-edge artificial intelligence."
        />
        <FeaturesSectionCard
          heading="Refined Interview Preparation"
          views="Hone your skills with role-specific practice questions and immediate, insightful feedback to elevate your performance."
        />
        <FeaturesSectionCard
          heading="Expert Industry Perspectives"
          views="Gain a competitive edge with up-to-the-minute trends, salary insights, and comprehensive market analysis."
        />
        <FeaturesSectionCard
          heading="Intelligent Resume Crafting"
          views="Effortlessly create ATS-optimized resumes with the finesse of AI-powered assistance."
        />
      </div>

      <div className="w-full py-10 md:py-20 bg-muted/50 mt-20 mb-20">
        <div className="flex flex-wrap justify-center gap-6 md:gap-20">
          <NumberCard heading="24" heading2="/7" para="AI Support" />
          <NumberCard heading="95" heading2="%" para="Success Rate" />
          <NumberCard heading="1000" heading2="+" para="Interview Question" />
          <NumberCard heading="50" heading2="+" para="Industries Covered" />
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
