import React from "react";
import {getUserOnboardingStatus} from "@/actions/user";
import {redirect} from "next/dist/server/api-utils";

const DashboardPage = async () => {
  const {isOnboarded} = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return <div>DashboardPage</div>;
};

export default DashboardPage;
