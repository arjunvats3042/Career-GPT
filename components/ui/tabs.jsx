// "use client";;
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const Tabs = ({
//   tabs: propTabs,
//   containerClassName,
//   activeTabClassName,
//   tabClassName,
//   contentClassName
// }) => {
//   const [active, setActive] = useState(propTabs[0]);
//   const [tabs, setTabs] = useState(propTabs);

//   const moveSelectedTabToTop = (idx) => {
//     const newTabs = [...propTabs];
//     const selectedTab = newTabs.splice(idx, 1);
//     newTabs.unshift(selectedTab[0]);
//     setTabs(newTabs);
//     setActive(newTabs[0]);
//   };

//   const [hovering, setHovering] = useState(false);

//   return (<>
//     <div
//       className={cn(
//         "flex flex-row items-center justify-around [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
//         containerClassName
//       )}>
//       {propTabs.map((tab, idx) => (
//         <button
//           key={tab.title}
//           onClick={() => {
//             moveSelectedTabToTop(idx);
//           }}
//           onMouseEnter={() => setHovering(true)}
//           onMouseLeave={() => setHovering(false)}
//           className={cn("relative px-4 py-2 rounded-full", tabClassName)}
//           style={{
//             transformStyle: "preserve-3d",
//           }}>
//           {active.value === tab.value && (
//             <motion.div
//               layoutId="clickedbutton"
//               transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
//               className={cn(
//                 "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
//                 activeTabClassName
//               )} />
//           )}

//           <span className="relative block text-black dark:text-white">
//             {tab.title}
//           </span>
//         </button>
//       ))}
//     </div>
//     <FadeInDiv
//       tabs={tabs}
//       active={active}
//       key={active.value}
//       hovering={hovering}
//       className={cn("mt-20", contentClassName)} />
//   </>);
// };

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering
// }) => {
//   const isActive = (tab) => {
//     return tab.value === tabs[0].value;
//   };
//   return (
//     (<div className="relative w-full h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab.value}
//           layoutId={tab.value}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -50 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn("w-4/5 h-3/5 absolute top-0 left-24", className)}>
//           {tab.content}
//         </motion.div>
//       ))}
//     </div>)
//   );
// };

"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar w-full max-w-full px-2 sm:px-0",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base w-full sm:w-auto",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{type: "spring", bounce: 0.3, duration: 1}}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white whitespace-nowrap">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-14 sm:mt-8 md:mt-10", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({className, tabs, hovering}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: idx * -40,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 20, 0] : 0,
          }}
          className={cn(
            "w-full sm:w-11/12 md:w-4/5 h-auto absolute top-0 left-0 sm:left-6 md:left-24",
            className
          )}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
