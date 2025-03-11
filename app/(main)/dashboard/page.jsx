import React from "react";
import {getUserOnboardingStatus} from "@/actions/user";
import {redirect} from "next/navigation";
import {getIndustryInsights} from "@/actions/dashboard";
import Dashboardview from "./_components/Dashboard-view";

const DashboardPage = async () => {
  const {isOnboarded} = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div className="container ">
      <Dashboardview insights={insights}/>
    </div>
  );
};

export default DashboardPage;
