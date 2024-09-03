import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import { Courses } from "@/components/Courses";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";

export default function Events() {
  return (
    <> <TransitionEffect />
    <main className="min-h-[30vh]">
    <Courses />
    </main>
  </>
  );
}
