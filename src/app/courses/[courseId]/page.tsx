import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import CoursePage from "@/components/CourseDetails";
import { ThreeDCardDemo } from "@/components/TestCard";
import TransitionEffect from "@/components/TransitionEffect";
import { course_details } from "../../../data/required_data";
import Image from "next/image";


export const dynamicParams = true;
export async function generateStaticParams() {
  return [{ courseId: "management" }, {  courseId: "puc" }, {  courseId: "professional" }, {  courseId: "correspondence" }];
}



export default function courseView({ params }: { params: { courseId: string } } ) {
  console.log(params, params.courseId)

  const coursed : any = course_details.find((course: any) => course.id == params.courseId);
  console.log(coursed, course_details)
  return (
    <> <TransitionEffect />
      <main className="w-[80%] mx-auto mt-5">
        { coursed && <CoursePage course={coursed} />} 
      </main></>
  );
} 