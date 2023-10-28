"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'

const navLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Projects",
    path: "/projects"
  },
  {
    title: "Article",
    path: "/article"
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-95'>
        <div className="flex flex-wrap items-center justify-between mx-auto px-5 py-2">
            <h1 className='text-5xl text-black font-semibold'>;</h1>
            <div className="mobile-menu block sm:hidden">
              {
                !navbarOpen ? (
                  <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-gray-200 text-gray-500 hover:text-black hover:border-black'>
                    <Bars3Icon className='h-5 w-5'/>
                  </button>
                ) : (
                  <button className='flex items-center px-3 py-2 border rounded border-gray-200 text-gray-500 hover:text-black hover:border-black'>
                    <XMarkIcon onClick={() => setNavbarOpen(false)} className='h-5 w-5'/>
                  </button>
                )
              }
            </div>
            <div className='menu hidden sm:block md:w-auto md:mr-14 lg:mr-48' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <NavLink href={link.path} title={link.title}/>
                    </li>
                  ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default Navbar