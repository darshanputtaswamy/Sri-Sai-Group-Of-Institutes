//@ts-nocheck
"use client"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from './Icons/Sun';
import { MoonIcon } from './Icons/Moon';
import React from 'react'


export const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-schema: dark)";
    const [mode, setMode] = useState("")
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme")
        console.log(userPref)
        const handleChange = () => {

            if (userPref) {
                let check = userPref === 'dark' ? "dark" : "light";
                setMode(check)
                if (check == 'dark') {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check)
                if (check == 'dark') {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                }
            }

        }

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])


    useEffect(() => {
        if (mode == 'dark') {
            window.localStorage.setItem("theme", 'dark')
            document.documentElement.classList.add('dark')
        } else if(mode == 'light') {
            window.localStorage.setItem("theme", 'light')
            document.documentElement.classList.remove('dark')
        }else {
            document.documentElement.classList.add(window.localStorage.getItem("theme"))
        }

    }, [mode])

    return [mode, setMode]
};


export default function ThemeSwitch({ className }: {
    className?: string
}) {
    let [mode, setMode] = useThemeSwitcher()
    return (
        <button onClick={(evt) => {
            evt.stopPropagation()
            setMode(mode === "light" ? "dark" : "light")
            window.dispatchEvent(new Event('themeChange'));
        }} className={`${className} ml-3 flex items-center justify-center rounded-full p-1 ${mode == "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === 'dark' ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
        </button>
    )
}


