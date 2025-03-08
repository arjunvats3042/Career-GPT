"use client";
import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "motion/react";
import {useState, useEffect} from "react";

const CheckIcon = ({className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const CheckFilled = ({className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const LoaderCore = ({loadingStates, value = 0}) => (
  <div className="flex relative justify-center items-center w-full max-w-xl mx-auto flex-col px-4">
    {loadingStates.map((loadingState, index) => {
      const distance = Math.abs(index - value);
      const opacity = Math.max(1 - distance * 0.5, 0);

      return (
        <motion.div
          key={index}
          className={cn("text-center flex gap-2 mb-3 md:mb-4 justify-center")}
          initial={{opacity: 0, y: -(value * 40)}}
          animate={{opacity, y: -(value * 40)}}
          transition={{duration: 0.5, ease: "easeOut"}}
        >
          <div>
            {index > value && (
              <CheckIcon className="text-black dark:text-white w-5 h-5 md:w-6 md:h-6" />
            )}
            {index <= value && (
              <CheckFilled
                className={cn(
                  "text-black dark:text-white w-5 h-5 md:w-6 md:h-6",
                  value === index &&
                    "text-black dark:text-[#00f2fe] opacity-100"
                )}
              />
            )}
          </div>
          <span
            className={cn(
              "text-black dark:text-white text-sm md:text-base",
              value === index && "text-black dark:text-[#00f2fe] opacity-100"
            )}
          >
            {loadingState.text}
          </span>
        </motion.div>
      );
    })}
  </div>
);

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 1000,
  loop = true,
}) => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    if (!loading) {
      setCurrentState(0);
      return;
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      );
    }, duration);

    return () => clearTimeout(timeout);
  }, [currentState, loading, loop, loadingStates.length, duration]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.2}}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-3xl"
        >
          <div className="relative w-full max-w-xl h-64 md:h-96 flex items-center justify-center mt-20 md:mt-32">
            <LoaderCore value={currentState} loadingStates={loadingStates} />
          </div>
          {/* Responsive top fade */}
          <div className="bg-gradient-to-b from-white dark:from-black via-white/95 dark:via-black/95 via-30% to-transparent inset-x-0 z-20 top-0 h-40 md:h-64 absolute opacity-100" />
          {/* Responsive bottom fade */}
          <div className="bg-gradient-to-t from-white dark:from-black via-white/95 dark:via-black/95 via-30% to-transparent inset-x-0 z-20 bottom-0 h-40 md:h-64 absolute opacity-100" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
