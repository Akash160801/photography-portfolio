import WomanImg from '../img/about/woman.png'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition1 } from '../transitions'

import { useContext } from 'react'
import { CursorContext } from '../context/CursorContext'

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className="container mx-auto h-full relative"
      >
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img className="w-[500px] lg:pt-8" src={WomanImg} alt="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            className="flex-1  pt-14 pb-1 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About Me</h1>
            <p>
              Hi! My name is Alina Lee and I’m a <b>passionate photographer</b>.
              I love capturing moments that tell a story. I’m enthusiastic about
              creating <b>beautiful images</b> that will last a lifetime.
            </p>
            <br />

            <p>
              I believe that <b>photography</b> is an art form that can be used
              to express emotions and capture memories.
            </p>
            <Link className="btn px-6 mt-3 lg:mt-5" to={'/portfolio'}>
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
