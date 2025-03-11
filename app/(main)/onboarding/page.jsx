import { industries } from "@/data/industries";
import React from "react";
import OnBoardingForm from "./_components/OnBoardingForm";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const OnboardingPage = () => {

  // const {isOnboarded} = await getUserOnboardingStatus();

  // if(isOnboarded) {
  //   redirect("/dashboard");
  // }

  return (
    <div>
      <OnBoardingForm industries={industries}/>
    </div>
  );
};

export default OnboardingPage;
