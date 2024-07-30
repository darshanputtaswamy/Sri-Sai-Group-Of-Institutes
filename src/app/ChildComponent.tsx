"use client"
import React, { Component } from "react"
import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation'

export function ChildComponent({ children }: { children: React.ReactNode }) {
    const path = usePathname();
    return (
      <div className="w-full h-full inline-block z-0">
        <ShootingStars />
        <StarsBackground />
        <AnimatePresence  mode="wait">
       {children}
        </AnimatePresence>
      </div>
    );
  }
  