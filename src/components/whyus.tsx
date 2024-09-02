
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../components/aceternityui/spotlight";


export function WhyUs() {
    return (
        <div className="h-[40rem] w-[90%] mx-auto my-10 rounded-md flex md:items-center md:justify-center bg-white[0.96] dark:bg-slate-500[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="gray"
            />
             <Spotlight
                className="top-40 left-0 md:-left-60 md:top-20"
                fill="gray"
            />
             <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="gray"
            />
            <div className=" p-4 max-w-full  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1 className="text-xl md:text-3xl font-bold text-center ">
                    Why Choose Sri Sai Group of Institutes?
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-800 dark:text-neutral-300 max-w-lg text-justify mx-auto">
                    At Sri Sai Group of Institutes, we believe in the transformative power of education, especially in rural areas where opportunities can be limited. Our commitment to providing quality education at every level—from school to postgraduate and professional courses—sets us apart. We understand the unique challenges faced by students in villages, and we have designed our programs to address these needs, ensuring that every student, regardless of their background, has access to excellent educational opportunities.
                </p>
                <p className="mt-4 font-normal text-base text-neutral-800 dark:text-neutral-300 max-w-lg text-justify mx-auto">
                    Our diverse course offerings, ranging from arts and commerce to professional fields like law and paramedical studies, cater to the varied interests and aspirations of our students. We are particularly proud of our scholarship programs, which support talented students and empower girls to pursue their dreams.
                </p>
                <p className="mt-4 font-normal text-base text-neutral-800 dark:text-neutral-300 max-w-lg text-justify mx-auto">
                    What truly makes us stand out is our team of highly educated and dedicated faculty members who bring a wealth of knowledge and experience to the classroom. They are committed to fostering an environment of academic excellence, critical thinking, and ethical values. By choosing Sri Sai Group of Institutes, you are choosing a future where education is the foundation for personal growth and societal impact.
                </p>
            </div>
        </div>
    );
}
