import React from 'react';
import './Cards.css';
import img from "../../Assets/website-19\ 1.jpg";
import img1 from "../../Assets/warehouse-10\ 1.jpg";
import img2 from "../../Assets/scaffolding-30\ 1.jpg";
import img3 from "../../Assets/website-26\ 2.jpg";

function Cards() {

 return (
<div className="container2">
<div className="row">
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


  <div className="column">
    <div className="Card2">
    <img src={img1}/>
    <div className="border1"></div>
      <h3 className="heading2">Warehouse Shelving</h3>
      <ul>
          <li><b>Adjustable Shelving</b></li>
          <li><b>Commercial Grade Shelving</b></li>
          <li><b>Drive-in Shelving</b></li>
          <li><b>Heavy Duty Shelving</b></li>
          <li><b>Industrial Shelving</b></li>
          <li><b>Light Duty Shelving</b></li>
          <li><b>Mezzanine Shelving</b></li>
          <li><b>Narrow Aisle Shelving</b></li>
          <li><b>Steel Shelving</b></li>
          <li><b>Warehouse Metal Storage<br/>Shelving</b></li>
      </ul>
      
    </div>
  </div>
  
  <div className="column">
    <div className="Card3">
    <img src={img2}/>
    <div className="border2"></div>
      <h3 className="heading3">Scaffolding</h3>
      <p>
        <ul>
          <li><b>Bushing-type Scaffolding</b></li>
          <li><b>Pin-type Scaffolding</b></li>
          <li><b>Pin-type Scaffolding</b></li>
          <li><b>Pipe-coupling Scaffolding</b></li>
          <li><b>Mobile Scaffoldings</b></li>
          <li><b>Multidirectional Scaffolding</b></li>
        </ul>
      </p>
      
    </div>
  </div>
  
  <div className="column">
    <div className="Card4">
    <img src={img3}/>
    <div className="border3"></div>
      <h3 className="heading4">Solar Structure</h3>
      <p>
        <ul>
          <li><b>Fixed Solar Structure</b></li>
          <li><b>Movable Solar Structure</b></li>
          <li><b>Adjustable Solar Structure</b></li>
          <li><b>Single Panel Structure</b></li>
          <li><b>Multiple Panel Structure</b></li>
        </ul>
      </p>
    </div>
  </div>
  </div>
  </div> 
)
}

export default Cards;