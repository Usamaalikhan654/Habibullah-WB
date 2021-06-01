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
          <li>Designing</li>
          <li>Cutting</li>
          <li>Bending</li>
          <li>Forming</li>
          <li>Pressing</li>
          <li>Punching</li>
          <li>Welding</li>
          <li>Assembling</li>
          <li>Finishing</li>
          <li>Installing</li>
      </ul>
      </p>
    </div>
  </div>

  <div className="column">
    <div className="Card1"> 
    <img src={img1}/>
    <div className="border"></div>
      <h3 className="heading1">Warehouse Shelving</h3> 
      <p>
      <ul>
          <li>Adjustable Shelving</li>
          <li>Commercial Grade Shelving</li>
          <li>Drive-in Shelving</li>
          <li>Heavy Duty Shelving</li>
          <li>Industrial Shelving</li>
          <li>Light Duty Shelving</li>
          <li>Mezzanine Shelving</li>
          <li>Narrow Aisle Shelving</li>
          <li>Steel Shelving</li>
          <li>Warehouse Metal Storage Shelving</li>
      </ul>
      </p>
    </div>
  </div>

  
  <div className="column">
    <div className="Card1"> 
    <img src={img2}/>
    <div className="border"></div>
      <h3 className="heading1">Scaffolding</h3> 
      <p>
      <ul>
          <li>Bushing-type Scaffolding</li>
          <li>Pin-type Scaffolding</li>
          <li>Pipe-coupling Scaffolding</li>
          <li>Mobile Scaffoldings</li>
          <li>Multidirectional Scaffolding</li>
      </ul>
      </p>
    </div>
  </div>

  
  <div className="column">
    <div className="Card1"> 
    <img src={img3}/>
    <div className="border"></div>
      <h3 className="heading1">Solar Structure</h3> 
      <p>
      <ul>
          <li>Fixed Solar Structure</li>
          <li>Movable Solar Structure</li>
          <li>Adjustable Solar Structure</li>
          <li>Single Panel Structure</li>
          <li>Multiple Panel Structure</li>
      </ul>
      </p>
    </div>
  </div>
  </div>
  </div>

 )
}

export default Cards;