import React from "react";
import "./home.css";
import image1 from "../images/app.png";
import image2 from "../images/pickupwaste.JPG";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div id="Home" className="homepage">
      {/* {(!isLoggedIn && authenticationModal) && <AuthenticationForms onButtonClick={() => toggleModal()} />} */}
      <div className="header-container">
        <div className="header-content">
          <div className="home-content">
            <p>
              The Borla app represents an innovative platform designed to
              enlighten individuals in various regions and communities about the
              significance of waste management, especially the recycling of
              plastics.{" "}
              {/* It offers 
            practical solutions to transform waste collection and household waste management, departing from the traditional 
            system of disposing waste, which often results in littered roads and water bodies. The solution to this issue is straightforward,
             thanks to the Borla app project, which provides a plethora of innovative methods for handling waste. This includes the convenience 
  of requesting waste management companies to efficiently collect and manage waste, thereby benefiting both the environment and society at large.*/}
            </p>

            {/*<Link to="/about" className="link">
              <div className="button">Read More</div>
</Link>*/}
          </div>
          <div className="right">
            <img src={image1} alt="Logo" />
          </div>
        </div>
      </div>
      {/* <div className="bodycontent">
          <h1>What you will write</h1>
       </div> */}

      <div className="ourservices">
        <h1>Our Services</h1>
        <div className="above">
          <div className="servicecard">
            <p className="servicehead">Waste pickup</p>
            <br></br>
            <div className="icons">
              <img src={image2} className="icon" />
              <p>
                Our waste pickup service guarantees prompt and responsible waste
                collection.Whether it's regular scheduled pickups or on-demand
                removal, we've got it covered.
              </p>
            </div>
          </div>
          <div className="servicecard">
            <p className="servicehead">Waste disposal</p>
            <br></br>
            <p>
              Rely on us for efficient and responsible waste management. We
              offer convenient solutions to dispose of waste, ensuring a
              cleaner, safer environment for your community.
            </p>
          </div>
        </div>
        <div className="below">
          <div className="servicecard">
            <p className="servicehead">Recycling</p>
            <br></br>
            <p>
              Take a green step forward. Our recycling services simplify
              responsible disposal, promoting a cleaner environment and a
              sustainable future for all.
            </p>
          </div>
          <div className="servicecard">
            <p className="servicehead">Bin Order Replacement</p>
            <br></br>
            <p>
              Need a new waste bin or a replacement? Our service makes ordering
              bins easy. Simply request a replacement, and we'll promptly
              deliver it to your location, ensuring your waste disposal remains
              convenient and efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
