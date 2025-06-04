import React,{ useEffect } from "react";
import "./Footer.scss";
import { AiOutlineDingding } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";



const Footer = () => {


  return (
    <div className="footer">
      <div className="secContainer contaier grid" >
        
        <div className="logoDiv">
          <div className="footerLogo">
          <AiOutlineDingding className="icon" />
          <span>MALOCH</span>
          </div>
          
          <div className="socials flex">
          <FaFacebookSquare className="icon" />
          <BiLogoGmail className="icon" />
          <FaInstagramSquare className="icon" />
        </div>
        </div>
     
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Travel & Condition</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contract Details</span>
          <span className="phone">0386464549</span>
          <span className="email">pntuananh201@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
