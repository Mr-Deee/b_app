import React from "react"
import "./home.css"
import image1 from "../images/app.jpg"


function Homepage() {
  

    return (
        <div id="Home" className="homepage">
            {/* {(!isLoggedIn && authenticationModal) && <AuthenticationForms onButtonClick={() => toggleModal()} />} */}
            <div className="header-container">
                <div className="header-background"></div>
                <div className="header-content">
                   <div className="left">
                    <p>Dispose of  your household waste and get <br></br> the environment clean and friendly .</p>
                    {/* {isLoggedIn ?
                        // <button className="btn"><Link to={userObject.userType === "user" ? "/sell" : "/buy"}>Let's Start</Link></button> :
                        <button className="btn" onClick={() => toggleModal()} data-hover="Login / Sign In"><div>Get Started</div></button>
                    } */}</div>
                    <div className="right"><img src={image1} alt="Logo" /></div>
                </div>
                

                <div className="shopping-img"></div>
            </div>
          {/* <div className="bodycontent">
          <h1>What you will write</h1>
       </div> */}

       <div className="homeextcard">


       </div>
          
          </div>
        
    )
}

export default Homepage;