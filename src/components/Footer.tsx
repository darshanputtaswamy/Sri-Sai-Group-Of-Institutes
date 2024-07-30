
"use client";
import React, { useRef, useState } from "react";
import { Label } from './aceternityui/Label'
import { Input } from './aceternityui/input'
import { cn } from "@/lib/utils";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./aceternityui/MagicButton";


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
            <div className="flex flex-col  my-4 lg:mt-32 justify-center ">
                <div className='flex w-full  justify-center'>
                    <p className="md:text-base text-sm md:font-normal font-light">
                        For query's please contact us on <span className='text-blue-500'> info@indianassociation.be </span>
                    </p>
                </div >

                <div className='flex flex-col w-2/4 mx-auto mt-5 justify-center'>
                    <p className="md:text-base text-sm md:font-normal font-light" >Subscribe to our mailing list to stay informed about upcoming events and initiatives. By providing your email address, you consent to receive communications from our team about events and activities in accordance with GDPR.</p>

                    {!emailSent && <form className="my-8 flex mx-auto flex-col" onSubmit={handleSubmit}>

                        <LabelInputContainer className="w-60 ">
                            <Input id="email" placeholder="Email Address" type="email" />
                        </LabelInputContainer>

                        <button
                            className="mt-4  w-60 bg-gradient-to-br relative group/btn from-black dark:from-gray-100 dark:to-gray-200 to-neutral-600 block dark:bg-zinc-800  text-light dark:text-dark rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Sign up &rarr;
                            <BottomGradient />
                        </button>


                    </form>}
                    {
                        emailSent && <div className="mt-5 mx-auto">
                            {/* button border magic from tailwind css buttons  */}
                            {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                            {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                            {/* add handleCopy() for the copy the text */}
                            <div
                                className={`absolute block`}
                            >
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>

                            <div className="w-full min-w-[100wv] flex">
                            <MagicButton
                                title={"Thanks for subscribing!!. Will we get back to you. "}
                                otherClasses="!bg-[#161A31] mx-auto "
                                
                            />
                            </div>
                        </div>

                    }
                </div >


                <div className='flex w-full mt-32 justify-center'>
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