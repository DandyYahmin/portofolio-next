import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center sm:hidden'>
        {
            links.map((link, index) => (
                <li key={index} className='hover:bg-[#ADB7BE] w-full text-center hover:bg-opacity-40'>
                    <NavLink href={link.path} title={link.title}/>
                </li>  
            ))
        }
    </ul>
  )
}

export default MenuOverlay