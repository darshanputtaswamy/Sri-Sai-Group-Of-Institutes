"use client"
import CampusContactPage from "@/components/ContactDetails";
import { RegistrationForm } from "@/components/RegistrationForm";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function joinus() {
  return (
    
    <> <TransitionEffect />
    <main className="min-h-[60vh] flex flex-col  text-dark  dark:text-light">
    <div className="w-2/3 mx-auto my-7">
      
      <CampusContactPage />
       </div>
    </main></>
  );
}
