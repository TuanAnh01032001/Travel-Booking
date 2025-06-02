import React,{useEffect} from "react";
import "./Reviews.scss";
import { AiFillStar } from "react-icons/ai";

//import image 
import image1 from "../../Assets/user1.jpg";
import image2 from "../../Assets/user2.jpg";
import image3 from "../../Assets/user3.jpg";
import image4 from "../../Assets/user4.jpg";
import image5 from "../../Assets/user5.jpg";
import image6 from "../../Assets/image4.jpg"


const Reviews = () => {

  //animation scroll
        useEffect(() => {
          Aos.init({duration:200})
        },[])

  return (
    <div className="review section container">
      <div className="secContainer grid">
        <div className="textDiv" >
          <span className="redText">FROM YOU CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
          </p>
          <span className="stars flex">
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
          </span>
          <div className="clientsImages flex">
          <img src={image1} alt="Client Image" />
          <img src={image2} alt="Client Image" />
          <img src={image3} alt="Client Image" />
          <img src={image4} alt="Client Image" />
          <img src={image5} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv" data-aos="fade-down">
          <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
