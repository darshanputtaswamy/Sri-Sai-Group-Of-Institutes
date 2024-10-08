"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/aceternityui/images-slider";
import { FlipWords } from "./aceternityui/flip-words";
import Link from "next/link";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1665491961340-ee9c11ee1990?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1705810591530-02053b1a9954?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1569173675610-42c361a86e37?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     ];
     const words = ["PUC - PCMB", "PUC - EBACs", "PUC - HEBA", "PUC - HEPS", "B.Com" , "BCA" , "BA", "B.Sc", "Law - 3 Years", "Law - 5 Years"];
 
  return (
    <ImagesSlider className="h-[20rem] md:h-[40rem]  w-[90%] mx-auto " images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        
        <FlipWords words={words} className="text-lime-50 dark:text-emerald-50"/> <br />
        For Admissions and Enqueries <br /> 
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
        <Link href="/contact"><span>Contact us  →</span></Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}


