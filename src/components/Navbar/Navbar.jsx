import React, { useState } from 'react'
import './Navbar.scss'

// Icon Nav
import { AiOutlineDingding } from "react-icons/ai";
import { RiChatDeleteFill } from "react-icons/ri";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  // State navBar
  const [navBar, setNavBar] = useState("menu");
  //Funtion show nav
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  }
  //Funtion close nav
  const closeNavBar = () => {
    setNavBar("menu");
  }
  return (
    <div className='navBar'>
      <div className="logoDiv">
        <AiOutlineDingding className='icon'/>
        <span>MALOCH</span> {/* Corrected from spant to span */}
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        {/* Remove navbar icon */}
        <RiChatDeleteFill className='icon closeIcon' onClick={closeNavBar}/>
      </div>
      <button className="signInBtn btn">Sign Up</button>
      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar}/>
    </div>
  )
}

export default Navbar