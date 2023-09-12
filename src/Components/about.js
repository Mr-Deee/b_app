import React from "react"
import './about.css';
import image from '../images/dustbin1.png';

function About() {
    return (
        <div className="aboutcontent">

        <div className="left">
        <h1>About</h1>
        <p>Welcome to borla. We are a dedicated team <br></br>of environmentally conscious professionals<br></br>
        committed to making a positive impact on <br></br>our community and the planet
        </p>
        </div>

        <div className="right">
         <img src={image} />
        </div>

        <div>
        </div>
        </div>
    )
}

export default About;