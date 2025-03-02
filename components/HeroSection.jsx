"use client";
import Link from "next/link";
import Threetext from "./threetext";
import {Button} from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {

  const imageRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageRef.current.classList.add("scrolled");
      }
      else {
        imageRef.current.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <section className="w-full pt-16 md:pt-24 pb-10 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6">
          {/* ThreeText as Heading */}
          <div className="w-full max-w-6xl">
            <Threetext />
          </div>

          {/* Paragraph */}
          <p className="max-w-2xl">
            Take your career to new heights with expert guidance, strategic
            interview preparation, polished resume building, and AI-powered
            tools for job success.
          </p>

          {/* Button */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-8">
            <Link href="/dashboard">
              <Button size="lg" className="px-8 w-full md:w-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-8 w-full md:w-auto"
                variant="outline"
              >
                Some Other Button
              </Button>
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper mt-8 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.jpg"
              alt="Hero Image"
              width={1024}
              height={576}
              className="rounded-lg shadow-2xl border mx-auto mt-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
