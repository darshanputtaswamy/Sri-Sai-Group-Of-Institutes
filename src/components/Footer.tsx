
"use client";
import React, { useRef, useState } from "react";
import { Label } from './aceternityui/Label'
import { Input } from './aceternityui/input'
import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./aceternityui/MagicButton";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
    const [emailSent, setEmailSent] = useState(false);
    const defaultOptions = {
        loop: emailSent,
        autoplay: emailSent,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const form = useRef<HTMLFormElement>(null);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        setEmailSent(true)
        /*
        const serviceID = 'default_service';
        const templateID = 'template_mwfd5vk';

        emailjs.sendForm(serviceID, templateID, form.current, {
            publicKey:'qy3j_s3KJcIQKqUdW'
        })
        .then(() => {
            setEmailSent(true);
        }, (err) => {
            console.log(JSON.stringify(err));
        }); */
    };

    return (
        <footer >
            <div className="flex flex-col  py-10 lg:mt-32 px-5 justify-center bg-slate-300 dark:bg-slate-800 text-black dark:text-white">
                <div className='flex w-full justify-left'>
             

                    <ul className="elementor-icon-list-items">
                        <li className="flex gap-1">
                            <span className="elementor-icon-list-icon">
                                <FaLocationDot />						</span>
                            <span className="elementor-icon-list-text">No 396, 1st Floor, OOOLIGA Complex<br/>Sampige road 8th Cross, Malleshwaram <br/>Bangalore - 560003</span>
                            </li>
                                <li className="elementor-icon-list-item">
                                    <a href="tel:8884888883" className="flex gap-1">

                                        <span className="elementor-icon-list-icon">
                                            <FaPhoneVolume />						</span>
                                        <span className="elementor-icon-list-text">+91 9902586939</span>
                                    </a>
                                </li>
                                <li className="elementor-icon-list-item">
                                    <a href="mailto:info@bgscollege.com" className="flex gap-1">

                                        <span className="elementor-icon-list-icon">
                                            <TfiEmail />						</span>
                                        <span className="elementor-icon-list-text">srisaigroupofinstitutes@gmail.com</span>
                                    </a>
                                </li>
                            </ul>

                            </div >



                            <div className='flex w-full mt-16 justify-center'>
                                <p className="text-xs font-light">
                                    © 2024 Created By 3WE IT Solutions All Rights Reserved.
                                </p>
                            </div >
                        </div>
                    </footer>
                    )
}


const BottomGradient = () => {
    return (
                    <>
                        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
                        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                    </>
                    );
};

                    const LabelInputContainer = ({
                        children,
                        className,
}: {
                        children: React.ReactNode;
                    className?: string;
}) => {
    return (
                    <div className={cn("flex flex-col space-y-2 w-full", className)}>
                        {children}
                    </div>
                    );
};