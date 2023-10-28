import Link from "next/link"

const NavLink = ({href, title}) => {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4 text-gray-500 sm:text-xl rounded md:p-0 hover:text-black sm:hover:underline underline-offset-4'>{title}</Link>
  )
}

export default NavLink