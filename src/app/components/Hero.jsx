"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import LINKEDINsvg from '../../../public/icons/LINKEDINsvg';
import GITHUBsvg from '../../../public/icons/GITHUBsvg';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left order-last sm:order-first'>
                <h1 className='mb-2 text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] to-pink-500'>Hello World!</span>
                </h1>
                <h2 className='text-[#ADB7BE] mb-4 text-2xl lg:text-4xl font-extrabold'>
                    Im{" "}<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14b8a6] via-pink-500 to-[#FF0066]'>Dandy Darmawan Al Yahmin</span>
                    <br />
                    <span className='text-[#14b8a6]'>
                        I do{" "}
                    </span>
                    <TypeAnimation sequence={[
                        "Back-End",
                        1000,
                        "Front-End",
                        1000,
                        "Cyber Security",
                        1000,
                    ]} wrapper='span' speed={50} repeat={Infinity}/>
                </h2>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-10 sm:mb-3 lg:text-xl'>Im always motivated to try new things, think critically, be thorough, and be disciplined. I have good adaptability, have great interest in the world of technology, and have an understanding of basic software technology design and development.</p>
                <div className='my-5 w-full sm:w-fit flex align-center justify-center with-icon--after'>
                    <span className='mr-3 text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>Connect me:</span>
                    <div className='mr-5'>
                        <a href="https://www.linkedin.com/in/dandydarmawanalyahmin/">
                            <LINKEDINsvg/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/DandyYahmin">
                            <GITHUBsvg/>
                        </a>
                    </div>
                    {/* <button className='w-full sm:w-fit px-6 py-3 rounded-full mr-4 text-white'>Hire Me</button>
                    <button className='w-full sm:w-fit px-1 py-1 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 hover:bg-slate-400 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2'>Download CV</span>
                    </button> */}
                </div>
            </div>
            <div className="col-span-5 place-self-center sm:mt-10 lg:mt-0 mb-10">
                <div className="rounded-full bg-gradient-to-r to-[#FF0066] from-[#14b8a6] sm:from-[#FF0066] sm:to-[#14b8a6] w-[200px] h-[200px] relative lg:w-[300px] lg:h-[300px]">
                    <Image className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src="/images/foto-diri.png" alt="hero image" width={300} height={300}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection