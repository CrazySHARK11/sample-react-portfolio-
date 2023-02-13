import { RiInstagramLine , RiFacebookBoxFill , RiYoutubeFill , RiTelegramFill } from 'react-icons/all'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <footer>
    <div className="wrap">
      <h2> Him Singh</h2>

  <div className="menu footer-menu">
  <Link to="/"> HOME </Link>
 <Link to="/service"> SERVICE </Link>
 <Link to="/projects"> PROJECTS</Link>
 <Link to="/contact"> CONTACT</Link>
  </div>

      <hr />

      <p className='credits'>2023©Made by Lovenish . All rights are reserved 

        <span className="socials">
          <a href="#"><RiInstagramLine /></a>
          <a href="#"><RiFacebookBoxFill /></a>
          <a href="#"><RiYoutubeFill /></a>
          <a href="#"><RiTelegramFill /></a>
        </span>
      </p>
    </div>
   </footer> 
  )
}
