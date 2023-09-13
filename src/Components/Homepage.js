import React from "react";
import "./home.css";
import image1 from "../images/app.jpg";

function Homepage() {
  return (
    <div id="Home" className="homepage">
      {/* {(!isLoggedIn && authenticationModal) && <AuthenticationForms onButtonClick={() => toggleModal()} />} */}
      <div className="header-container">
  
        <div className="header-content">
          <div className="home-content">
            <p>
            The Borla app represents an innovative platform designed to enlighten individuals in various regions and 
            communities about the significance of waste management, especially the recycling of plastics. It offers 
            practical solutions to transform waste collection and household waste management, departing from the traditional 
            system of disposing waste, which often results in littered roads and water bodies. The solution to this issue is straightforward,
             thanks to the Borla app project, which provides a plethora of innovative methods for handling waste. This includes the convenience 
             of requesting waste management companies to efficiently collect and manage waste, thereby benefiting both the environment and society at large.
            </p>
     
          </div>
          <div className="right">
            <img src={image1} alt="Logo" />
          </div>
        </div>

      </div>
      {/* <div className="bodycontent">
          <h1>What you will write</h1>
       </div> */}

      <div className="homeextcard"> <p>The Borla app is an innovative platform that educates customers across all regions and communities
on the important of waste management and recycling been able to separate Plastic bottles from the
waste food waste is the main target of the Borla app</p></div>
    </div>
  );
}

export default Homepage;
