"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./aceternityui/tracing-beam";
import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { WiTime2 } from "react-icons/wi";

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
                            <button
                            className="mt-4 mx-auto float w-60 bg-gradient-to-br relative group/btn from-black dark:from-gray-100 dark:to-gray-200 to-neutral-600 block dark:bg-zinc-800  text-light dark:text-dark rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            onClick={(e)=>{console.log(e)}}
                        >
                            Register
                            <BottomGradient />
                        </button>

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
                    Join us in celebrating Ganesh Festival 2025! Experience the joy and devotion of this auspicious occasion with traditional rituals, music, dance, and delicious Indian cuisine. Let's come together to honor Lord Ganesha and enjoy a festive evening with our community. Don't miss it!.
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
                    You are cordially invited to our Navaratri Pooja celebration! Come and immerse yourself in the vibrant festivities with traditional prayers, Garba dance, and delicious Indian food. Let's honor the divine feminine and celebrate these auspicious nine nights together!
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
