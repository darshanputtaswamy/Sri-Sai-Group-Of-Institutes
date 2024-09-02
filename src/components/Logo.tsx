import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='text-2xl font-bold flex'><Image src="./sri-shirdi-sai-baba-temple-dfw-logo-nobg-modif.png"  alt='logo' width={40} height={40}  /><span className="pl-3 pt-1">Sri Sai Group Of Institutions</span></div>
  )
}
