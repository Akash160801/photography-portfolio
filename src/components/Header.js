import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import MobileNav from './MobileNav'

import { useContext } from 'react'
import { CursorContext } from '../context/CursorContext'

import { Link } from 'react-router-dom'

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <header className="bg-gray-100 shadow fixed z-30 w-full px-[30px] lg:px-[100px] h-20 items-center lg:h-[100px] flex">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between ">
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="max-w-[200px]"
          to={'/'}
        >
          <img src={Logo} alt="" />
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:flex gap-x-11 font-semibold text-lg"
        >
          <Link
            to={'/'}
            className="text-gray-600 hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className="text-gray-600 hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={'/contact'}
            className="text-gray-600 hover:text-primary transition"
          >
            Contact
          </Link>
          <Link
            to={'/portfolio'}
            className="text-gray-600 hover:text-primary transition"
          >
            Portfolio
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  )
}

export default Header
