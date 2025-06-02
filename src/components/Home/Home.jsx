import React,{useEffect} from 'react'
import './Home.scss'
import Video from '../../Assets/video.mp4'
import { AiOutlineSwapRight } from "react-icons/ai";

//import image
import image1 from "../../Assets/image3.jpg"
import image2 from "../../Assets/image4.jpg"
import image3 from "../../Assets/image7.jpg"
import image4 from "../../Assets/image8.jpg"



const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
   <div className="Home">
    <div className="videoBg">
      <video src={Video} autoPlay loop muted/>
    </div>
    <div className="sectionText">
        <h1 >Unlock Your Travel Dreams With Us!</h1>
        <p >
          Discover the world's most adventurous nature,
          life is so short for a
          trip.
        </p>
        <button className="btn flex" > GET STARTED <AiOutlineSwapRight className="icon" /></button>    
    </div>
    
    <div className="popularPlaces">
      <div className="content">
        <h3 >Popular Places</h3>
        <div className="images flex">
          <img src={image1} alt="Detination Images"/>
          <img src={image2} alt="Detination Images"/>
          <img src={image3} alt="Detination Images"/>
          <img src={image4} alt="Detination Images"/>
        </div>
      </div>
    </div>

   </div>
  )
}

export default Home