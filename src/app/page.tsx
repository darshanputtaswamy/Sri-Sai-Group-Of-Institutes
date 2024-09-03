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
import { WhyUs } from "@/components/whyus";
import { ImagesSliderDemo } from "@/components/ImageSlide";
import { PresidentsMessage } from "@/components/PresidentsMessage";
import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
export default function Home() {
  const images = [
    "/madhyanarati_270.jpg",
  ];

  return (
    <> <TransitionEffect />
      <main className=" min-h-[60vh] flex flex-col  text-dark  dark:text-light">
        <Image
          src={banner.src}
          alt="Sri Sai Group of Institutes - Sai Baba Photo"
          layout="responsive"
          width={1500} // Original width of the image
          height={500} // Original height of the image
          style={{ width: '100%', height: 'auto' }} // Ensures full width and maintains aspect ratio
        />
        <AudioPlayer />
        <VisionMission />
        <div className=" w-[80%] mx-auto mt-5 block">
          <ImagesSliderDemo />
        </div>
        <WhyUs />
        <div className=" w-[80%] mx-auto my-5 block">
          
          <PresidentsMessage />
          
        </div>
      </main>

      <ShootingStars />
          <StarsBackground />
    </>);
}
