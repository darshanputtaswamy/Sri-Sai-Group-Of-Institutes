"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./aceternityui/tracing-beam";
import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { WiTime2 } from "react-icons/wi";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./aceternityui/animated-modal";

import { motion } from "framer-motion";
import { MdOutlineAppRegistration } from "react-icons/md";
 

export function UpcomingEvents() {
    return (

        <div className="pt-32">
            <div className="flex w-full items-center justify-center">
                <h2 className="font-extralight text-xl  md:text-4xl dark:text-neutral-200 py-4"> Upcoming Events</h2>
            </div>
            <TracingBeam className="px-6 py-10">

                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                    {Events.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10">

                            <p className={twMerge(' ', "text-xl mb-4")}>
                                {item.title}
                            </p>

                            <div className="text-sm  prose prose-sm dark:prose-invert">
                                {item?.image && (
                                    <Image
                                        src={item.image}
                                        alt="blog thumbnail"
                                        height="1000"
                                        width="1000"
                                        className="rounded-lg mb-10 object-cover"
                                    />
                                )}
                                {item.description}
                            </div>
                            <div className="flex flex-col mt-5">
                                <div className="flex flex-col lg:flex-row place-items-start justify-left lg:justify-between">
                                    <div className="flex flex-row"> <CgCalendarDates size={'1.5em'} /> <div className="pl-1">{(new Date(item.date)).toDateString() + ', ' + (new Date(item.date)).toLocaleTimeString()}</div></div>
                                    <a href={item.venue.maplink} target="_blank"><div className="flex flex-row "> <CiLocationOn size={'1.5em'} /> <div className="pl-1">{item.venue.place}</div></div></a>
                                </div>
                                <div className="flex flex-col lg:flex-row place-items-start justify-left lg:justify-between">
                                    <div className="flex flex-row "><WiTime2 size={'1.5em'} /> {item.duration}</div>
                                    <div className="flex flex-row "> <IoIosPeople size={'1.5em'} /> <div className="pl-1">{item.max_capacity} max people</div></div>
                                </div>
                            </div>
                            



                        <Modal>
        <ModalTrigger className="bg-dark dark:bg-light dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Register now
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <MdOutlineAppRegistration size={'1.5rem'}/>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
           Registeration form
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const Events = [
    {
        event_id: 1,
        title: "Ganesh Festival & Celebration",
        description: (
            <>
                <p>
                    Join us in celebrating Ganesh Festival 2025! Experience the joy and devotion of this auspicious occasion with traditional rituals, music, dance, and delicious Indian cuisine. Let&apos;s come together to honor Lord Ganesha and enjoy a festive evening with our community. Don&apos;t miss it!.
                </p>
            </>
        ),
        badge: "Register",
        image:
            "https://images.unsplash.com/photo-1567878673942-be055fed5d30?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-09-07T10:30:00",
        duration: "5 Hrs",
        venue: {
            place: "BluePoint Antwerpen",
            location: "Filip Williotstraat 9, 2600 Berchem, Belgium",
            maplink: "https://maps.app.goo.gl/5yb1DC75wHfmFVsQA"
        },
        max_capacity: "250"

    },
    {
        event_id: 2,
        title: "Navaratri Pooja",
        description: (
            <>
                <p>
                    You are cordially invited to our Navaratri Pooja celebration! Come and immerse yourself in the vibrant festivities with traditional prayers, Garba dance, and delicious Indian food. Let&apos;s honor the divine feminine and celebrate these auspicious nine nights together!
                </p>
            </>
        ),
        badge: "Register",
        image:
            "https://images.unsplash.com/photo-1626094305935-94534682b1d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "2024-10-03T10:30:00",
        duration: "10 days",
        venue: {
            place: "BluePoint Antwerpen",
            location: "Filip Williotstraat 9, 2600 Berchem, Belgium",
            maplink: "https://maps.app.goo.gl/5yb1DC75wHfmFVsQA"
        },
        max_capacity: "250"
    }
];
