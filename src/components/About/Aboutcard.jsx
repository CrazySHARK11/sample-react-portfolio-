import {HiArrowNarrowRight} from "react-icons/all"

export default function Aboutcard(props) {
  return (
    <div className="aboutCard">
    {props.icon}
    <h3>{props.work}</h3>
    {props.des}

    <a href="#">KNOW MORE <HiArrowNarrowRight /></a>
  </div>
  )
}
