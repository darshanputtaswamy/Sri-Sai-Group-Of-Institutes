import React from 'react'
import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import { ThreeDCardDemo } from "@/components/TestCard";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import { campus_details } from "../../../data/required_data"
import { ParallaxScroll } from '@/components/aceternityui/parallex-loader';


export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ campusId: "campus-narayanapura" }, { campusId: "campus-vijipura" }];
}



const CampusDetails = ({ title, description, imageLocation }: any) => {
  return (
    <div className="mt-6">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};


const CampusPhotos = ({ photos }:any) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold">Campus Photos</h3>
      <ParallaxScroll images={photos} />;
    </div>
  );
};

const CoursesOffered = ({ courses }: any) => {
  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold">Courses Offered</h3>
      <ul className="list-disc mt-2">
        {courses.map((course: any, index: any) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};


export default function page({ params }: { params: { campusId: string } }) {
  const campus = campus_details.find((campus: any) => campus.id === params.campusId);

  return (
    <div className="mx-auto py-10 px-20">
      <CampusDetails title={campus.title} description={campus.description} imageLocation={campus.image_location} />
      <CoursesOffered courses={campus.courses_offered} />
      <CampusPhotos photos={campus.campus_photos} />
    </div>
  );
}
