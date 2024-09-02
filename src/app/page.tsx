import { TextGenerateEffect } from "@/components/aceternityui/text-generate-effect";
import { ThreeDCardDemo } from "@/components/TestCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { LandingPageContent } from "@/components/LandingPageContent";
import VisionMission from "@/components/VisionMission";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import TransitionEffect from "@/components/TransitionEffect";
import { ImagesSlider } from "@/components/aceternityui/images-slider";
import AudioPlayer from "@/components/audioplayer";
import banner from "../../public/saibaba_unique.png"

export default function Home() {
  const images = [
    "/madhyanarati_270.jpg",
  ];
  
  return (
    <> <TransitionEffect />
    <main className=" min-h-[60vh] flex flex-col  text-dark  dark:text-light">
    <Image src={banner.src}  alt={"sri sai group of institutes- sai baba photo"}   height="500"
                                        width="1500"/>
   <AudioPlayer />
   <VisionMission />
    </main>
   
    </>  );
}
