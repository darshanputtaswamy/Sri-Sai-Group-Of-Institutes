"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useThemeSwitcher } from "../ThemeSwitcher";
import Link from "next/link";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        linkHref: string;
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

  
    let [backgroundColors, setBackgroundColors]= useState([ "var(--slate-900)","var(--black)","var(--neutral-900)"])
    
    useEffect(() => {
        // Function to check the theme and update background colors
        function checkUserData() {
          const item = window.localStorage.getItem("theme");
          
          if (item === 'dark') {
            setBackgroundColors([
              "var(--slate-900)",
              "var(--black)",
              "var(--neutral-900)"
            ]);
          } else {
            setBackgroundColors([
              "var(--slate-300)",
              "var(--white)",
              "var(--neutral-300)"
            ]);
          }
        }
      
        // Initial check when the component mounts
        checkUserData();
      
        // Event listener to handle theme changes
        function handleStorageChange(event
            :any
        ) {
          if (event.key === "theme") {
            checkUserData();
          }
        }
      
        window.addEventListener('themeChange', handleStorageChange);
      
        return () => {
          window.removeEventListener('themeChange', handleStorageChange);
        };
      }, []);
    
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 z-100"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <Link key={item.title + index} href={item.linkHref}>
                        <div  className="my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-900 dark:text-slate-100 "
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-700 dark:text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                        </Link>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
