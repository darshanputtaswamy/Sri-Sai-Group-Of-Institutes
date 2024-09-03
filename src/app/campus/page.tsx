import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import { ThreeDCardDemo } from "@/components/TestCard";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import {campus_details} from "../../data/required_data"

export default function campus() {
   

  return (
    <> <TransitionEffect />
      <main className="w-[80%] mx-auto mt-5">
        <div className="flex flex-col md:flex-row gap-5 justify-evenly ">
          {
            campus_details.map((e: any, index:any) => {
              return <ThreeDCardDemo key={index} title={e.title} description={e.description} image_location={e.image_location} id={e.id} />

            })
          }
        </div>
      </main></>
  );
} 
