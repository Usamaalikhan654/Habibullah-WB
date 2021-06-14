import React from 'react';
import image from "../../Assets/logo-05\ 1.jpg";
import image1 from "../../Assets/website-33\ 1.jpg";
import './Input.css';
import link from "../Home/HEPL Website_organized.pdf";
import image3 from "../../Assets/website-32\ 1.jpg";
import image4 from "../../Assets/headphone-22.png";
import emailjs from 'emailjs-com';

function Input() {

  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4ywf19y', 'template_wcl9j8w', e.target, 'user_bgqJpE58sM4p2OVzSDoE6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (

    <div className="container">
    <a href="tel:0300-011-hepl (4375)">
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
         <form onSubmit={sendEmail}>
          <h2 className="heading">SUBSCRIBE NOW</h2>  
          <input className="input" name="SubscribeEmail" placeholder="Enter Your Email"></input>
          <button onSubmit={sendEmail} className="rect">SUBMIT NOW</button>
          </form>
          <p className="parag1">GET MORE INFO</p>
          <span className="image1"><a href="https://www.linkedin.com/login" target="_blank"><img src={image1} /></a></span>
          <span className="img3"><a href="https://www.facebook.com/" target="_blank"><img src={image3} /></a></span>
        </div>
      </div>
      </a>
    </div>


  )
}

export default Input;