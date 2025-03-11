"use client";
import {
  Brain,
  BriefcaseIcon,
  LineChart,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {format, formatDistanceToNow} from "date-fns";
import React from "react";
import {Badge} from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {MagicCard} from "@/components/magicui/magic-card";
import theme from "tailwindcss/defaultTheme";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboardview = ({insights}) => {
  const salaryData = insights.salaryRanges.map((range) => ({
    name: range.role,
    min: range.min / 100000,
    max: range.max / 100000,
    median: range.median / 100000,
  }));

  const getDemandLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getMarketOutlookInfo = (outlook) => {
    switch (outlook.toLowerCase()) {
      case "positive":
        return {icon: TrendingUp, color: "text-green-500"};
      case "neutral":
        return {icon: LineChart, color: "text-yellow-500"};
      case "negative":
        return {icon: TrendingDown, color: "text-red-500"};
      default:
        return {icon: LineChart, color: "text-gray-500"};
    }
  };

  const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
  const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

  // Format dates using date-fns
  const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
  const nextUpdateDistance = formatDistanceToNow(
    new Date(insights.nextUpdate),
    {addSuffix: true}
  );

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between item-center">
        <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="h-full">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="h-full flex flex-col"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Market Outlook
              </CardTitle>
              <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="text-2xl font-bold">{insights.marketOutlook}</div>
              <p className="text-xs text-muted-foreground">
                Next update {nextUpdateDistance}
              </p>
            </CardContent>
          </MagicCard>
        </Card>

        <Card className="h-full">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="h-full flex flex-col"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Industry Growth
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="text-2xl font-bold">
                {insights.growthRate.toFixed(1)}%
              </div>
              <Progress value={insights.growthRate} className="mt-2" />
            </CardContent>
          </MagicCard>
        </Card>

        <Card className="h-full">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="h-full flex flex-col"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Demand Level
              </CardTitle>
              <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="text-2xl font-bold">{insights.demandLevel}</div>
              <div
                className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(
                  insights.demandLevel
                )}`}
              />
            </CardContent>
          </MagicCard>
        </Card>

        <Card className="h-full">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="h-full flex flex-col"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
              <Brain className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-1">
                {insights.topSkills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </MagicCard>
        </Card>
      </div>

      <Card className="h-full">
        <MagicCard
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          className="h-full flex flex-col"
        >
          <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">
              Salary Ranges by Roles
            </CardTitle>
            <CardDescription className="text-xs ">
              Minimum, Median and Maximum salaries (in Lakhs)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col ">
            <div className="h-[300px] md:h-[400px] w-full overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{fontSize: 10}} />
                  <YAxis />
                  <Tooltip
                    content={({active, payload, label}) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-background border rounded-lg p-2 shadow-md">
                            <p className="font-medium">{label}</p>
                            {payload.map((item) => (
                              <p key={item.name} className="text-sm">
                                {item.name}: ₹{item.value} Lakhs
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="min" fill="#94a3b8" name="Min Salary" />
                  <Bar dataKey="median" fill="#64748b" name="Median Salary" />
                  <Bar dataKey="max" fill="#475569" name="Max Salary" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </MagicCard>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="h-full">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="h-full flex flex-col"
          >
            <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">
                Key Industry Trends
              </CardTitle>
              <CardDescription className="text-xs">
                Current trends shaping the industry
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <ul className="space-y-2">
                {insights.keyTrends.map((trend, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                    <span>{trend}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </MagicCard>
        </Card>
        <Card className="h-full">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="h-full flex flex-col"
          >
            <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">
                Recommended Skills
              </CardTitle>
              <CardDescription className="text-xs">
                Skills to consider developing
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <ul className="space-y-2">
                {insights.topSkills.map((skill, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="h-2 w-2 mt-2 rounded-full bg-primary"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </div>
  );
};

export default Dashboardview;
