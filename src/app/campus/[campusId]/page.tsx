import React from 'react'
import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import { ThreeDCardDemo } from "@/components/TestCard";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";

export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ campusId: "1" }, { campusId: "2"}];
}

export default function CampusDetails({params}:{ params :{ campusId :string}}) {


  return (
    <div>{params.campusId}</div>


  )
}
 