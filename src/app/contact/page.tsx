"use client"
import { RegistrationForm } from "@/components/RegistrationForm";
import TransitionEffect from "@/components/TransitionEffect";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function joinus() {
  return (
    
    <> <TransitionEffect />
    <main className="min-h-[60vh] flex flex-col  text-dark  dark:text-light">
    <div className="w-2/3 mx-auto my-7">
      <p className="mt-2">The Indian Association of Belgium invites you to be a part of our mission to build a vibrant, community-centric non-profit organization. Our primary goal is to promote the cultural, social, and professional interests of Indians living in Belgium while fostering friendship and cooperation between the Indian and Belgian communities.</p>

      <p className="mt-4">We aim to bring people together and cultivate unity by organizing various events and activities, including cultural festivals, performing arts, sports meets, educational workshops, entrepreneurship forums, and discussions on legal and taxation matters. You can explore our detailed     <a href="https://assets.zyrosite.com/YyvXkw2pwahEJ6x8/iab-ppt-pdf-mjEQkNnkenCgMRXX.pdf" id="zjkxWF" data-v-9ddc5313="" data-v-4a176f12="" data-qa="gridbutton:zjkxwf">
      <button className="px-6 py-2 bg-dark dark:bg-light text-white dark:text-dark rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
      IAB Presentation
      </button>
       </a> from the Ganesh Festival in September 2023 for more insights. 
  

      </p>

      <p className="mt-4">We are seeking enthusiastic volunteers, both for short-term roles during events and ad-hoc projects, as well as long-term positions on the board or as leaders of our various wings. We welcome all individuals to contribute to our vision and mission by sharing their ideas and expertise.</p>

      <p className="mt-4">Please express your interest by filling out the form below. Let us know about your experience in event management, communication, media, finance, arts, education, membership, legal matters, sponsorship, or previous experience with non-profits.</p>

      <RegistrationForm/>

      <p className="mt-4">By joining the association, you&apos;ll have the opportunity to lay a strong foundation for our community, meet new people, learn new skills, share your ideas and experiences, and make a positive impact on society.</p>
      </div>
    </main></>
  );
}
