import { ShootingStars } from "@/components/aceternityui/shooting-stars";
import { StarsBackground } from "@/components/aceternityui/stars-background";
import { ThreeDCardDemo } from "@/components/TestCard";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";

export default function campus() {
   
  
  let campus = [
    {
      "title": "Narayanapura Campus",
      "description": "Located in the serene environment of Narayanapura, this campus offers Pre-University Courses (PUC) with state-of-the-art facilities and experienced faculty, providing a strong foundation for students' academic and professional careers.",
      "image_location": "https://images.unsplash.com/photo-1665491961340-ee9c11ee1990?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
      "id": "campus-narayanapura"
    },
    {
      "title": "Vijipura Campus",
      "description": "The Vijipura Campus is dedicated to advanced education, offering Law, Paramedical, and Postgraduate courses. With a focus on professional development and practical learning, this campus is equipped with modern labs and resources to support specialized education.",
      "image_location":  "https://images.unsplash.com/photo-1705810591530-02053b1a9954?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": "campus-vijipura"
    }
  ]
  return (
    <> <TransitionEffect />
      <main className="w-[80%] mx-auto mt-5">
        <div className="flex flex-col md:flex-row gap-5 justify-evenly ">
          {
            campus.map((e: any) => {
              return <ThreeDCardDemo title={e.title} description={e.description} image_location={e.image_location} id={e.id} />

            })
          }
        </div>
      </main></>
  );
} 
