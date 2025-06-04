import React, { useState,useEffect } from "react";
import "./Questions.scss";
import Accordion from "../Questions/Accordion";


const Questions = () => {
  // form submission
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  //Accoding
  const [active, setActive] = useState("title1");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email, "Question:", question);
  };
   
  
  return (
    <div className="questions section container">
      <div className="secHeading" >
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid" >
          <Accordion
            title="How do I choose the right travel destination for me? "
            desc="Consider your interests, budget, desired experiences, and the type of environment you enjoy. 
                    Research destinations that align with your preferences and offer attractions or activities you find appealing."
            active={active}
            setActive={setActive}
           />
          {/* //*/}
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="The best time to visit depends on the destination, weather patterns, tourist seasons, and your preferences for crowds and prices. Research the climate and peak seasons for your chosen destination."
            active={active}
            setActive={setActive}
           />

          <Accordion
            title="How can I find budget-friendly travel options and deals?"
            desc="Look for off-season travel, set fare alerts, use comparison websites, consider alternative accommodations, and be flexible with your travel dates and destinations."
            active={active}
            setActive={setActive}
           />
          <Accordion
            title="What essential items should I pack for my adventure? "
            desc="Pack based on your destination, activities, and weather. Always include travel documents, medications, appropriate clothing, toiletries, and any specialized gear needed for your planned activities."
            active={active}
            setActive={setActive}
           />
        </div>
        <div className="inquiry-form" >
          <h2>Do you have any specific question?</h2>
          <p>
            Please fill the form below and our dedicated team will get intouch
            with you as soon as possible.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Enter your question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questions;
