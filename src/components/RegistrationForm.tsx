"use client";
import React, { useRef,useState } from "react";
import { Label } from "@/components/aceternityui/Label";
import { Input, TextArea, DropDownSingleSelect } from "@/components/aceternityui/input";
import { cn } from "@/lib/utils";

import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "@/components/aceternityui/MagicButton";

export function RegistrationForm() {
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

    };
    return (
        <div className="flex flex-col justify-around  sm:flex-row md-flex-row ">

            <div  id="contact-form" className="max-w-md w-full  rounded-2xl shadow-input bg-light dark:bg-dark">
                { !emailSent && <form ref={form} className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="client_name">Name</Label>
                        <Input id="client_name" name="client_name" placeholder="Anil Kumar" type="text"  />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="client_email">Email Address</Label>
                        <Input id="client_email" name="client_email" placeholder="projectmayhem@fc.com" type="email"   />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="client_phone">Phone or Mobile</Label>
                        <Input id="client_phone"  name="client_phone" placeholder="+919900990099" type="phone"  />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="client_comments">Area of Interest*</Label>
                        <TextArea id="client_comments" name="client_comments" placeholder="additional details" type="textarea"  />
                    </LabelInputContainer>
                 
                    <button
                            className="mt-4  mx-auto w-60 bg-gradient-to-br relative group/btn from-black dark:from-gray-100 dark:to-gray-200 to-neutral-600 block dark:bg-zinc-800  text-light dark:text-dark rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
                            type="submit"
                    >
                        Submit &rarr;
                        <BottomGradient />
                    </button>
                </form>
                } 

                {
                    emailSent &&  <div className="mt-5 relative">
                    {/* button border magic from tailwind css buttons  */}
                    {/* add rounded-md h-8 md:h-8, remove rounded-full */}
                    {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
                    {/* add handleCopy() for the copy the text */}
                    <div
                      className={`absolute -bottom-5 right-0 block`}
                    >
                      <Lottie options={defaultOptions} height={200} width={400} />
                    </div>
      
                    <MagicButton
                      title={"Thanks for reaching out!!. Will we get back to you. "}
                      otherClasses="!bg-[#161A31]"
                    />
                  </div>

                }
            </div >

            <div className="flex flex-col  my-auto">

                <div className="mb-8 flex w-full max-w-[370px]">
                    <div
                        className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                    >
                        <a href="https://www.google.com/maps?q=13.0136123,77.5761442&z=17&hl=en" target="_blank">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="w-full" >
                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                            Our Location
                        </h4>
                        <p className="text-base text-body-color dark:text-dark-6">
                            No 2xxxx, 14th maxxxx xxxx, Rxxxxx vilas exxxxxxxx, <br />xxxxxx-56xxxx
                        </p>
                    </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                    <div
                        className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                    >
                        <a href="tel:+919880579963">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_941_17577)">
                                    <path
                                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_941_17577">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                            Phone Number
                        </h4>
                        <p className="text-base text-body-color dark:text-dark-6">
                            xxxxxxxxxxx
                            <br />
                            sssssssssss
                        </p>
                    </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                    <div
                        className="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]"
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                            Email Address
                        </h4>
                        <p className="text-base text-body-color dark:text-dark-6">
                            <a href="info@indianassociation.be" target="_blank" >info@indianassociation.be</a>
                        </p>
                    </div>
                </div>

            </div>

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