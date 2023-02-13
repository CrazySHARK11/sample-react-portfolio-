
import { BsFillCartFill , AiFillYoutube , MdOutlineDesignServices } from 'react-icons/all'
import Aboutcard from "./Aboutcard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function About() {

  useEffect(()=>{
     AOS.init({
      duration: 500,
      delay: 200,
      disable : "mobile",
     });
  },[])

  return (
    <section className='about' >
        <div className="wrap">
          <h2>  <hr /> About <hr /></h2>
          <p  data-aos="fade-up">I'm here to help you turn your videos into your secret weapon.
       While you're busy building your business, I focus on helping you dominate your niche with authoritative and engaging video content, completely done for you.By partnering together, you'll save HOURS that you'd otherwise spend trying to edit your own videos…
        You'll dominate your niche with a defined personal brand and social media presence…And you'll unlock a stream of inbound leads and grow your business with fresh videos every month watched by thousands of potential leads.</p>
       
          <div className="about_con" data-aos="fade-up">
           <Aboutcard icon={<AiFillYoutube fill="#fff"/>} work="Video Editing" des={<p>I can edit videos for youtube channel or for your  advertisement <br /> for your business</p>}/>
           <Aboutcard icon={<MdOutlineDesignServices fill="#fff"/>} work="Web Desiging" des={<p>I can edit videos for youtube channel or for your  advertisement <br /> for your business</p>}/>
           <Aboutcard icon={<BsFillCartFill fill="#fff"/>} work="Digital Marketing" des={<p>I can edit videos for youtube channel or for your  advertisement <br /> for your business</p>}/>
          </div>
       
        </div>
    </section>
  )
}
