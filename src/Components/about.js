import React from "react";
import "./about.css";
import image from "../images/dustbin1.png";

function About() {
  return (
    <div className="aboutcontent">
      <div className="left">
        <h1>About</h1>
        <p>
          {" "}
          Our incredible journey from a start up to a global Innovation Hub
          Centre, our vision to deliver a Better Future for Digital
          Transformation for our clients and build digital product that create
          positive impact around the world.
        </p>
        <p>
            Our clients and the world has been reinvigorated through our
          continued delivery of innovative solutions driven by technology and
          data.
        </p>
        <p>
          Our vision is to redefine waste collection and managing waste in local
          communities through the collective effort of all stakeholders using
          technology, innovation and education for mutual economic, ecological
          and social benefits.
        </p>
        <p>Our vision is in line with the SDG goals</p>

        <p>
          To become the national app for waste management, the app will provide
          a platform for all stakeholders in the value chain to operate at
          maximum efficiency and profit and with strategies to attain existing
          users and attract others.
        </p>
      </div>

      <div className="right">
        <img src={image} />
      </div>

      <div></div>
    </div>
  );
}

export default About;
