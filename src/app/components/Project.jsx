import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='grid grid-cols-1'>
        <div className="place-self-center">
            <Image alt="img" src="/portofolio-next/images/Coding-bro.png" width={400} height={400}/>
            <h1 className='text-[#92E3A9] mt-2 mb-20 text-4xl lg:text-6xl font-extrabold text-center'>Coming Soon</h1>
        </div>
        
    </div>
  )
}

export default Project

