import React from "react";
import "./about.css";
import image from "../images/dustbin1.png";
import { useState, useEffect } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function About() {
  useEffect(() => {
    document.title = "Borla App";
  }, []);
  const [isContentVisible, setContentVisibility] = useState(false);

  const toggleContent = () => {
    setContentVisibility(!isContentVisible);
  };
  return (
    <>
      <h1 className="head">About</h1>
      <div className="aboutcontent">
        <div className="left">
          <img src={image} alt="Dustbin" />
        </div>

        <div className="right">
          <div className="mobile-display">
            Our incredible journey from a start-up to a global Innovation Hub
            Centre, our vision to deliver a Better Future for Digital
            Transformation for our clients and build digital products that
            create a positive impact around the world.
            {isContentVisible && (
              <div>
                <p> </p>
                Our clients and the world have been reinvigorated through our
                continued delivery of innovative solutions driven by technology
                and data. Our vision is to redefine waste collection and
                managing waste in local communities through the collective
                effort of all stakeholders using technology, innovation, and
                education for mutual economic, ecological, and social benefits.
                Our vision is in line with the SDG goals To become the national
                app for waste management, the app will provide a platform for
                all stakeholders in the value chain to operate at maximum
                efficiency and profit and with strategies to attain existing
                users and attract others.
              </div>
            )}
            <button onClick={toggleContent} className="readmore">
              {isContentVisible ? "Hide Content" : "Read More"}
            </button>
          </div>
          <p>
            <div className="readmorecontent">
              <div className="div1">
                <br />
                Our clients and the world have been reinvigorated through our
                continued delivery of innovative solutions driven by technology
                and data.
                <br />
                Our vision is to redefine waste collection and managing waste in
                local communities through the collective effort of all
                stakeholders using technology, innovation, and education for
                mutual economic, ecological, and social benefits.
                <br />
                Our vision is in line with the SDG goals To become the national
                app for waste management, the app will provide a platform for
                all stakeholders in the value chain to operate at maximum
                efficiency and profit and with strategies to attain existing
                users and attract others.
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
