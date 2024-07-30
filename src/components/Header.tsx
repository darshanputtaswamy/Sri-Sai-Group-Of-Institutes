

import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import  ThemeSwitch from './ThemeSwitcher';


export default function Header() {
    
    return (
        <header className='sticky top-0 w-full z-40 bg-light dark:bg-dark pt-10 pl-10 pr-10 pb-5 font-medium flex items-center lg:justify-between'>
            <NavBar/> 
            <div className='flex flex-row  gap-4 pl-3'>
            <Logo />
            <ThemeSwitch className="hidden lg:block"/>
            </div>
        </header>
    )
}
