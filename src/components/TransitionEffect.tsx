"use client"
import React from 'react'
import { AnimatePresence, motion} from "framer-motion"

function TransitionEffect() {
  return (
   <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-slate-400 dark:bg-blue-950'
    initial={{x:"100%",width:'100%'}}
    animate={{x:"0%",width:"0%"}}
    exit={{x:["0%","100%"], width:["100%","0%"]}}
    transition={{delay:0.2, duration:0.6, ease:"easeInOut"}}
    />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-slate-200 dark:bg-slate-800 '
    initial={{x:"100%",width:'100%'}}
    animate={{x:"0%",width:"0%"}}
    transition={{delay:0.4, duration:0.8, ease:"easeInOut"}}
    />
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-light dark:bg-dark'
    initial={{x:"100%",width:'100%'}}
    animate={{x:"0%",width:"0%"}}
    transition={{delay:0.6, duration:0.8, ease:"easeInOut"}}
    />
    </>
  )
}

export default TransitionEffect