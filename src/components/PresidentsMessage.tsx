
"use client";
import React from "react";
import { BackgroundGradient } from "./aceternityui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import bm from "../../public/bm.jpg"

export function PresidentsMessage() {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] h-[40rem] md:h-[25rem] flex flex-col-reverse md:flex-row p-4 sm:p-10 bg-white dark:bg-zinc-900">
       
                <div className="md:p-4 md:mt-6">
                    <p className="text-base sm:text-xl text-black md:mt-20 md:mb-2 dark:text-neutral-200">
                        Dr. B Manjunath, President
                    </p>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Dr. B Manjunath, the esteemed President of Sri Sai Group of Institutes, is a distinguished lawyer and senior advocate at the High Court of Karnataka. His unwavering commitment to promoting equality and empowering the youth of our country is evident through the numerous scholarships he has awarded to talented students. Dr. Manjunath&apos;s dedication and vision have been instrumental in the success of our institution.
                    </p>
                </div>
                <div className="min-w-72">
                    <Image
                        src={bm.src}
                        alt="B M Manjunath, Our President"
                        height="600"
                        width="1200"
                        layout="responsive"
                        style={{ width: '150%', height: 'auto' }} // Ensures full width and maintains aspect ratio
                    />
                </div>
            </BackgroundGradient>
        </div>
    );
}
