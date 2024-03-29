import { useState, useEffect, createContext } from 'react'

export const CursorContext = createContext()

const CursorProvider = ({ children }) => {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  })

  const [cursorBG, setCursorBG] = useState('default')

  const mobileViewportIsActive = window.innerWidth < 768

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursor({
          x: e.clientX,
          y: e.clientY,
        })
      }
      window.addEventListener('mousemove', move)

      return () => {
        window.removeEventListener('mousemove', move)
      }
    } else {
      setCursorBG('none')
    }
  })

  const cursorVariants = {
    default: {
      x: cursor.x - 16,
      y: cursor.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursor.x - 72,
      y: cursor.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255,1)',
    },
  }

  const mouseEnterHandler = () => {
    setCursorBG('text')
  }
  const mouseLeaveHandler = () => {
    setCursorBG('default')
  }

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
