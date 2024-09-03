
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
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

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
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row space-x-6 text-3xl">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"><FaSquareTwitter /></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"><FaInstagramSquare /></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"><FaFacebookSquare /></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"><FaLinkedin /></i>
                        </a>
                    </div>
                </div>



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