"use client";
import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {motion, AnimatePresence} from "framer-motion";
import Image from "next/image";
import {useEffect, useState} from "react";

export const AnimatedTestimonials = ({testimonials, autoplay = false}) => {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (autoplay && isMounted) {
      const interval = setInterval(handleNext, 8000);
      return () => clearInterval(interval);
    }
  }, [autoplay, isMounted, testimonials.length]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  if (!isMounted) {
    return (
      <div className="w-full max-w-[90%] sm:max-w-3xl lg:max-w-4xl mx-auto antialiased font-sans px-4 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-20">
          <div className="relative h-64 sm:h-72 lg:h-80 w-full mx-auto max-w-[400px] sm:max-w-[500px]">
            <Image
              src={testimonials[0].src}
              alt={testimonials[0].name}
              width={500}
              height={500}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </div>
          <div className="flex flex-col justify-between py-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-black">
                {testimonials[0].name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
                {testimonials[0].designation}
              </p>
              <p className="text-base sm:text-lg text-gray-500 mt-4 sm:mt-8 dark:text-neutral-300">
                {testimonials[0].quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[90%] sm:max-w-3xl lg:max-w-4xl mx-auto antialiased font-sans px-4 py-8 sm:py-12 lg:py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-20">
        <div className="w-full mx-auto max-w-[400px] sm:max-w-[500px]">
          <div className="relative h-64 sm:h-72 lg:h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`${index}-${testimonial.src}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 45
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 40,
                    rotate: randomRotateY(),
                  }}
                  transition={{duration: 0.4, ease: "easeInOut"}}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={`${active}-${testimonials[active].name}`}
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            exit={{y: -20, opacity: 0}}
            transition={{duration: 0.2, ease: "easeInOut"}}
          >
            <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-black">
              {testimonials[active].name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-base sm:text-lg text-gray-500 mt-4 sm:mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, wordIndex) => (
                <motion.span
                  key={`${active}-${wordIndex}`}
                  initial={{filter: "blur(10px)", opacity: 0, y: 5}}
                  animate={{filter: "blur(0px)", opacity: 1, y: 0}}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.02 * wordIndex,
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-3 sm:gap-4 pt-6 sm:pt-8 md:pt-0 self-start">
            <button
              onClick={handlePrev}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button transition-all duration-300 hover:scale-110"
            >
              <IconArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button transition-all duration-300 hover:scale-110"
            >
              <IconArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};