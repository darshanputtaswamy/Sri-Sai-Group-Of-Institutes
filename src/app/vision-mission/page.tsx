import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import TransitionEffect from "@/components/TransitionEffect";
import VisionMission from "@/components/VisionMission";
import Image from "next/image";

export default function Events() {
  return (
    <> <TransitionEffect />
    <main className="min-h-[60vh]">
      <div className="mt-40">
      <VisionMission />
      </div>
    </main>
  </>
  );
}
