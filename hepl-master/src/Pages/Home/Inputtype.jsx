import React from 'react';
import image from "../../Assets/logo-05\ 1.jpg";
import image1 from "../../Assets/website-33\ 1.jpg";
import './Input.css';
import link from "../Home/HEPL Website_organized.pdf";
import image3 from "../../Assets/website-32\ 1.jpg";
import image4 from "../../Assets/headphone-22.png";


function Input() {

  return (

    <div className="container">
      <div className="row">
        <div className="column2">
          <div className="img">
            <img src={image} />
          </div>
          <p className="parag">
            Engineer, Design, Manufacture,
            Fabricate and Supply of Electrical
            and Mechanical Engineering
            products and related equipment.
          </p>
          <div className="container3">
            <div className="img-container">
              <img src={image4} style={{ height: "40px" }} />
            </div>

            <div className="imagepara"><a href="tel:0300-011-hepl (4375)">Talk to our officers<br />0300-011-hepl (4375)</a></div>

          </div>
        </div>
        <div className="column1">
          <div className="innerLink">
          <a href={link} download><span>DOWNLOAD COMPANY PROFILE</span></a>
          </div>
        </div>
        <div className="column2">
          <h2 className="heading">SUBSCRIBE NOW</h2>
          <input className="input" placeholder="Enter Your Email"></input>
          <button className="rect">
            SUBMIT NOW
    </button>
          <p className="parag1">GET MORE INFO</p>
          <span className="image1"><a href="https://www.linkedin.com/login" target="_blank"><img src={image1} /></a></span>
          <span className="img3"><a href="https://www.facebook.com/" target="_blank"><img src={image3} /></a></span>
        </div>
      </div>
    </div>


  )
}

export default Input;