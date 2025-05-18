"use client";

import Image from "next/image";
import {Tabs} from "./ui/tabsacc";
import banner from "@/public/banner.jpg";

export function Working() {
  const tabs = [
    {
      title: "Professional Onboarding",
      value: "Professional Onboarding",
      content: (
        <div className="w-full relative rounded-2xl p-4 sm:p-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Professional Onboarding</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
    {
      title: "Craft Your Documents",
      value: "Craft Your Documents",
      content: (
        <div className="w-full relative rounded-2xl p-4 sm:p-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Craft Your Documents</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
    {
      title: "Prepare for Interviews",
      value: "Prepare for Interviews",
      content: (
        <div className="w-full relative rounded-2xl p-4 sm:p-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Prepare for Interviews</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
    {
      title: "Track Your Progress",
      value: "Track Your Progress",
      content: (
        <div className="w-full relative rounded-2xl p-4 sm:p-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black border-2 border-white">
          <p className="relative z-10">Track Your Progress</p>
          <DummyContent image={banner} />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-[20rem] sm:min-h-[30rem] md:min-h-[40rem] relative flex flex-col w-full max-w-5xl mx-auto items-center justify-start my-4 px-4 sm:px-6 md:px-8">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({image}) => {
  return (
    <div className="relative w-full mt-2 sm:mt-4 overflow-hidden rounded-xl">
      <Image
        src={image}
        alt="dummy image"
        width={1000}
        height={563} // 16:9 ratio based on 1000px width (1000 * 9/16 = 562.5)
        className="object-cover w-full h-auto rounded-xl 
          md:h-[80%] md:max-h-[500px]
          sm:h-[70vh] 
          [@media(max-width:640px)]:aspect-[16/9] [@media(max-width:640px)]:h-auto"
        priority
      />
    </div>
  );
};
