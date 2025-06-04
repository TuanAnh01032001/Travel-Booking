import React,{useEffect} from 'react'
import './Portifolio.scss'

//import image
import icon1 from '../../Assets/protection.jpg'
import icon2 from '../../Assets/destination.jpg'
import icon3 from '../../Assets/onlinechat.jpg'
import image from '../../Assets/girdImage.png'



const Portifolio = () => {


  return (
   
    <div className="portifolio section cpntainer">
       <hr></hr>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 >Why Should You Choose Us</h3>
            <p >Experience unparalleled service, tailored for your peace of mind and travel aspirations.</p>
          </div>

          <div className="grid" >
            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon1} alt="Icon Image" />
              </div>
              <div className="infor" >
                <h4 >Safety and support</h4>
                <p >
                We prioritize your safety above all else. With advanced security systems, your personal information and transactions are always absolutely protected. Enjoy your experience with complete peace of mind.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon2} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Explore and Discover</h4>
                <p>
                Open the door to your dream destinations. From tropical beaches to majestic mountains, we offer a wide range of options, catering to all your exploration preferences and desires.
                </p>
              </div>
            </div>

            <div className="singlePortifolio flex">
              <div className="iconDiv">
                <img src={icon3} alt="Icon Image" />
              </div>
              <div className="infor">
                <h4>Always Here for You</h4>
                <p>
                With 24/7 online support, our professional team is always ready to answer any questions and assist you throughout your journey. Connect easily, experience optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer" data-aos="fade-up-right">
          <img src={image} alt="" />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default Portifolio