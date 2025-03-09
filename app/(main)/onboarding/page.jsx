import { industries } from "@/data/industries";
import React from "react";
import OnBoardingForm from "./_components/OnBoardingForm";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/dist/server/api-utils";

const OnboardingPage = async () => {

  const {isOnboarded} = await getUserOnboardingStatus();

  if(isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <div>
      <OnBoardingForm industries={industries}/>
    </div>
  );
};

export default OnboardingPage;
