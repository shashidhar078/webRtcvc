import React from 'react'
import "../App.css"
import {Link} from "react-router-dom"

function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>ConnectX AI</h2>
        </div>
        <div className="navList">
           <p>Join as Guest</p>
        <p>Register</p>
        <div role="button">
          <p>Login</p>
          </div>
        </div>
       </nav>

      <div className="landingMainContainer">
        <div>
          <h1> <span style={{color:"#0092CC"}}> Connect</span> with your Loved Ones</h1>
          <p>Cover a distance by ConnectX video call</p>
          <div role="button">
            <Link to="/home" className="getStartedBtn">Get Started</Link>
          </div>
        </div>
        <div className="mobpng">
          <img src="/mobile.png"/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage