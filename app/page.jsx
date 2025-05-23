"use client";

import {BackgroundBeams} from "@/components/background-beams";
import Faq from "@/components/Faq";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import {Working} from "@/components/Working";

export default function Home() {
  return (
    <>
      <ScrollProgress  />
      <div>
        <BackgroundBeams />
      </div>

      <div>
        <HeroSection />
        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Next-Level Features to Skyrocket Your Career
          </h1>
          <FeaturesSection />
        </div>
        <div className="mt-18">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            How It Works
          </h1>
          <Working />
        </div>
        <div className="mt-48 md:mt-14 lg:mt-20 bg-muted/50">
          <h1 className="text-4xl md:text-5xl font-bold text-center pt-10">
            What Our Users Say
          </h1>
          <AnimatedTestimonialsDemo />
        </div>
        <div className="mt-24 mb-5">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          <Faq />
        </div>
      </div>
    </>
  );
}
