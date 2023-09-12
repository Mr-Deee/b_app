import React from "react"
import "./contact.css"



function Contact() {
    return (
    <div className="contactcontent" align="center">
    <h1>Contact us</h1>
    <br></br>
    <input type="text" placeholder="Name"></input><br></br>
    <textarea type="text" placeholder="Talk to us"/><br></br>
    <button>Submit</button>
    </div>
    )
}

export default Contact;