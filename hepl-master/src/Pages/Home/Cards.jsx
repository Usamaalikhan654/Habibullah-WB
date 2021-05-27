import React from 'react';
import './Cards.css';
import img from "../../Assets/website-19\ 1.jpg";
import img1 from "../../Assets/warehouse-10\ 1.jpg";
import img2 from "../../Assets/scaffolding-30\ 1.jpg";
import img3 from "../../Assets/website-26\ 2.jpg";

function Cards() {

 return (
<div className="container2">
<div className="row" className="core-features">
  <div className="column">
    <div className="Card1"> 
    <img src={img}/>
    <div className="border"></div>
      <h3 className="heading1">General Fabrication</h3> 
      <p>
      <ul>
          <li><b>Designing</b></li>
          <li><b>Cutting</b></li>
          <li><b>Bending</b></li>
          <li><b>Forming</b></li>
          <li><b>Pressing</b></li>
          <li><b>Punching</b></li>
          <li><b>Welding</b></li>
          <li><b>Assembling</b></li>
          <li><b>Finishing</b></li>
          <li><b>Installing</b></li>
      </ul>
      </p>
    </div>
  </div>
  </div>
  </div>

 )
}

export default Cards;