import { useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
}

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl  cursor-pointer"
      >
        <HiMenu />
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'show' : ''}
        className="bg-white w-full z-20 top-0 right-0 shadow-2xl absolute h-96 max-w-xs rounded-[8px]"
      >
        <div
          onClick={() => {
            setOpenMenu(false)
          }}
          className="z-30  text-3xl cursor-pointer absolute left-4 top-12 text-primary "
        >
          <IoMdClose />
          <hr className="h-[2px] min-w-[290px] my-2 border-black" />
        </div>

        <ul className="h-full mt-3 flex flex-col justify-center items-center gap-y-5 text-primary font-primary font-semibold text-3xl">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li>
            <Link to={'/portfolio'}>Portfolio</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  )
}

export default MobileNav
