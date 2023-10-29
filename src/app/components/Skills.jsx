"use client"
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import OSsvg from './icons/OSsvg'
import DATABASEsvg from './icons/DATABASEsvg'
import JSsvg from './icons/JSsvg'
import PHPsvg from './icons/PHPsvg'
import CSSsvg from './icons/CSSsvg'
import TOOLsvg from './icons/TOOLsvg'

const Skills = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    )
    const listSkill = [
        {
            title: "Operating System",
            icon: <OSsvg/>,
            subject: "Windows, Linux Ubuntu"
        },
        {
            title: "Database",
            icon: <DATABASEsvg/>,
            subject: "MySQL, PostgreSQL"
        },
        {
            title: "JavaScript",
            icon: <JSsvg/>,
            subject: "NodeJS, NestJS, ReactJS, NextJS, VueJS"
        },
        {
            title: "PHP",
            icon: <PHPsvg/>,
            subject: "Laravel, CodeIgniter"
        },
        {
            title: "CSS",
            icon: <CSSsvg/>,
            subject: "Bootstrap, Tailwind"
        },
        {
            title: "Tools",
            icon: <TOOLsvg/>,
            subject: "Git, NPM"
        }
    ]
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 1
            }
            }
        };
        
        const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
            y: 0,
            opacity: 1
            }
        }
  return (
    <div className='mb-60'>
        <h2 className="font-bold text-2xl lg:text-4xl mt-6 sm:mt-40 md:mt-56 lg:mt-60 w-full text-center text-[#FF0066]">Skills</h2>
        <div ref={ref} className="sm:w-[70%] mx-auto relative">
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-8 top-1 w-[4px] h-full bg-gradient-to-b from-[#FF0066] via-pink-500 to-[#14b8a6] origin-top'/>
            <motion.ul
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {listSkill.map((list, index) => (
                    <motion.li key={index} variants={item} className='item my-8 pl-20 sm:pl-10 first:mt-10 last:mb-0 sm:w-[80%] mx-auto flex flex-col sm:items-left justify-between'>
                        <div>
                            <div className='flex align-center with-icon--before w-full'>
                                <p className='text-black capitalize font-bold text-xl lg:text-2xl mr-1'>{list.title}</p>
                                {list.icon}
                            </div>
                            <p className='text-[#ADB7BE]'>{list.subject}</p>
                        </div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    </div>
  )
}

export default Skills