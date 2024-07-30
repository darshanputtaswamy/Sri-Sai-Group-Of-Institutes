import { TextGenerateEffect } from "@/components/aceternityui/text-generate-effect";
import { ThreeDCardDemo } from "@/components/TestCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { LandingPageContent } from "@/components/LandingPageContent";
import VisionMission from "@/components/VisionMission";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  const words = "The Indian Association of Belgium is a nonprofit organization dedicated to fostering a vibrant community of Indians living in Belgium."
  return (
    <> <TransitionEffect />
    <main className=" min-h-[60vh] flex flex-col  text-dark  dark:text-light">

      <LandingPageContent />
      <VisionMission />
      <UpcomingEvents/>
      
    </main>
    </>  );
}
