import { useEffect, useState } from 'react'
import { FaCat , RxHamburgerMenu , RxCross1 } from 'react-icons/all'
import { Link } from 'react-router-dom'

export default function Header() {

  const [active , setActive] = useState(false)
  const [stick , setStick] = useState("")

  useEffect(()=>{
    window.onscroll = function() {
      window.scrollY > 10 ? setStick("sticked") :  setStick("") 
    };
     
  },[])

  return (
   <header className={stick && stick}>
    <div className="wrap">
     <nav>
     <a href="#" className='logo'><FaCat/></a>

  { active ? <RxCross1 onClick={() => setActive(!active)}  className='menu_btn'/> : <RxHamburgerMenu   onClick={() => setActive(!active)}  className='menu_btn'/> }

<div className={`menu ${active ? "active" : ""}`}>
 <Link to="/"> HOME </Link>
 <Link to="/service"> SERVICE </Link>
 <Link to="/projects"> PROJECTS</Link>
 <Link to="/contact"> CONTACT</Link>
</div>
  


     </nav>
    </div>
   </header>
  )
}
