import WomanImg from '../img/home/woman.png'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'
import { useContext } from 'react'
import { CursorContext } from '../context/CursorContext'

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section "
    >
      <div className="mx-auto h-full relative  container">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="w-full flex flex-col  justify-center lg:pl-16 items-center  pb-14 lg:pt-0 lg:pb-[10px] pt-24 lg:absolute lg:w-auto  lg:items-start  z-10"
          >
            <h1 className="h1">
              Photgrapher <br /> & Film Maker
            </h1>
            <p className="font-primary text-[25px] mb-4 lg:mb-8 lg:text-[36px]">
              Los Angeles, USA
            </p>
            <Link to={'/contact'} className="btn">
              Hire Me
            </Link>
          </motion.div>
          <div className="flex  justify-end max-h-96 lg:max-h-max">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={transition1}
              className=" relative lg:mr-[125px] overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                className="lg:w-[570px]"
                src={WomanImg}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home
