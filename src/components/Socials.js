import { ImFacebook, ImInstagram, ImPinterest, ImTwitter } from 'react-icons/im'

import { useContext } from 'react'
import { CursorContext } from '../context/CursorContext'

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className="hidden xl:flex ml-24"
    >
      <ul className="flex gap-x-6">
        <li>
          <a href="https://www.facebook.com">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
