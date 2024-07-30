"use client";
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitcher';


function CustomLink({ href, title, classname }: {
    href: string,
    title: string,
    classname: string
}) {

    const pathname = usePathname()

    return <Link href={href} className={`${classname} relative group`}>{title}
        <span className={`h-[2px] inline-block  bg-dark dark:bg-light absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease-in duration-300 ${(pathname == href) ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </Link>
}


function CustomMobileLink({ href, title, classname, toggle }: {
    href: string,
    title: string,
    classname: string,
    toggle:any
}) {

    const pathname = usePathname()
    const router = useRouter()

    const handleMobileClick = (evt:any) =>{
        evt.stopPropagation()
        router.push(href)
        toggle(evt)
    }

    return <button className={`${classname} relative group`} onClick={handleMobileClick}>{title}
        <span className={`h-[2px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease-in duration-300 ${(pathname == href) ? 'w-full' : 'w-0'}
        `}>&nbsp;</span>
    </button>
}

export default function NavBar() {
    let [isOpen, setIsOpen] = useState(false)
 

    function handleClick(evt:any) {
        evt.stopPropagation()
        setIsOpen(!isOpen)
    }

    return <>
        <button className='flex flex-col justify-center items-center lg:hidden ' onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transistion-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transistion-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transistion-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        <div className='hidden w-fill lg:flex items-center justify-between'>
            <nav>
                <CustomLink href={"/"} title="Home" classname="mr-4" />
                <CustomLink href={"/events"} title="Events" classname="mr-4" />
                <CustomLink href={"/blogs"} title="Blogs" classname="mr-4" />
                <CustomLink href={"/join-us"} title="Join Us" classname="mr-4" />
            
            </nav>
        </div>
        {isOpen ?<div className='min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-light dark:te bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 lg:hidden '>
            <nav className='flex flex-col '> 
                <CustomMobileLink href={"/"} title="Home" classname="my-1" toggle={handleClick}/>
                <CustomMobileLink href={"/events"} title="Events" classname="my-1" toggle={handleClick}/>
                <CustomMobileLink href={"/blogs"} title="Blogs" classname="my-1" toggle={handleClick}/>
                <CustomMobileLink href={"/join-us"} title="Join Us" classname="my-1" toggle={handleClick}/>
            
            </nav>
        </div>:null}
        { <ThemeSwitch className="m-3 fixed bottom-0 right-0 lg:hidden"/>}
    </>
}