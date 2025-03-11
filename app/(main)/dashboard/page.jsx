// import React from "react";
// import {getUserOnboardingStatus} from "@/actions/user";
// import {redirect} from "next/navigation";
// import {getIndustryInsights} from "@/actions/dashboard";
// import Dashboardview from "./_components/Dashboard-view";

// const DashboardPage = async () => {
//   const {isOnboarded} = await getUserOnboardingStatus();
//   const insights = await getIndustryInsights();

//   if (!isOnboarded) {
//     redirect("/onboarding");
//   }
//   return (
//     <div className="container ">
//       <Dashboardview insights={insights}/>
//     </div>
//   );
// };

// export default DashboardPage;


"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getUserOnboardingStatus} from "@/actions/user";
import {getIndustryInsights} from "@/actions/dashboard";
import Dashboardview from "./_components/Dashboard-view";

const DashboardPage = () => {
  const router = useRouter();
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const {isOnboarded} = await getUserOnboardingStatus();
      if (!isOnboarded) {
        router.push("/onboarding");
        return;
      }
      const insightsData = await getIndustryInsights();
      setInsights(insightsData);
      setLoading(false);
    };
    fetchData();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <Dashboardview insights={insights} />
    </div>
  );
};

export default DashboardPage;
