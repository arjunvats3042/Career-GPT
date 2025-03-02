"use client";

import Image from "next/image";
import {Tabs} from "./ui/tabs";
import banner from "@/public/banner.jpg";

export function Working() {
  const tabs = [
    {
      title: "Professional Onboarding",
      value: "Professional Onboarding",
      content: (
        <div className="w-full relative rounded-2xl p-4 text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Professional Onboarding</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
    {
      title: "Craft Your Documents",
      value: "Craft Your Documents",
      content: (
        <div className="w-full relative rounded-2xl p-4 text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Craft Your Documents</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
    {
      title: "Prepare for Interviews",
      value: "Prepare for Interviews",
      content: (
        <div className="w-full relative rounded-2xl p-4 text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Prepare for Interviews</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
    {
      title: "Track Your Progress",
      value: "Track Your Progress",
      content: (
        <div className="w-full relative rounded-2xl p-4 text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Track Your Progress</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[40rem] relative flex flex-col w-full max-w-5xl mx-auto items-center justify-center my-6 px-8">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({image}) => {
  return (
    <Image
      src={image}
      alt="dummy image"
      width={1000}
      height={1000}
      className="object-cover w-full h-[80%] rounded-xl mt-4"
      priority
    />
  );
};
