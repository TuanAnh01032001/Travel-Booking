import React, { useState, useEffect } from "react";
import "./Questions.scss";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";



const Accordion = ({ title, desc, active, setActive }) => {
  //animation scroll

  return (
    <div className="accordionContainer">
      <span className="title flex" >
        {title}
        <span onClick={() => setActive(title)}>
          {active === title ? (
            <FaAngleDoubleDown className="Icon" />
          ) : (
            <FaAngleDoubleUp className="Icon" />
          )}
        </span>
      </span>
      <p className={`${active === title ? "show" : ""} description`}>
        {desc} 
      </p>
    </div>
  );
};

export default Accordion;
