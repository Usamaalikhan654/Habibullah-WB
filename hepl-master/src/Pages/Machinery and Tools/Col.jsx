import React from 'react';
import "./Col.css";
import colimg from "../../Assets/website-06\ 1.jpg";
import colimg1 from "../../Assets/website-07\ 1.jpg";
import colimg2 from "../../Assets/website-08\ 2.jpg";
import colimg3 from "../../Assets/website-09\ 1.jpg";

function Col () {
   return (
    <div className="jar"> 
    <div className="row">
    <h2 className="colhead">MACHINERY AND TOOLS</h2>
    <div className="col-1">
      <p className="colpara">Below is a list of machinery and tools available for sheet metal work & Fabrication:</p>
      <ul className="col-list">
          <li>15-Ton Power Press</li>
          <li>30-Ton Power Press</li>
          <li>50-Ton Power Press</li>
          <li>350-Amp Argon Welding Plant (AC-DC)</li>
          <li>All Necessary Basic Tools</li>
          <li>All Type Of Accessories Workshop</li>
          <li>Baby Grinder</li>
          <li>Bending Machine 10 Feet</li>
          <li>Drill Machine</li>
          <li>Electric Welding Plant</li>
          <li>Lathe Machine 6 Feet</li>
          <li>Shaper Machine</li>
          <li>Shearing Machine 8 Feet (Qty: 2)</li>
          <li>Vertical Milling Machine</li>
      </ul>
    </div>
    <div className="col-1">
        <span className="col-img"><img src={colimg} style={{height: "515px"}}/></span>

        <span className="col-img1"><img src={colimg1}/></span>
        <span className="col-img2"><img src={colimg2}/></span>
        <span className="col-img3"><img src={colimg3}/></span>
    </div>
  </div>
  </div>  
   )
}




export default Col;