import React from 'react';
import './Cards.css';
import imag1 from "../../Assets/website-10\ 4\ \(6\).jpg";
import imag2 from "../../Assets/website-11\ 2.jpg";
import imag3 from "../../Assets/website-12\ 2.jpg";
import imag4 from "../../Assets/website-13\ 2.jpg";
import imag5 from "../../Assets/website-14\ 2.jpg";
import imag6 from "../../Assets/website-15\ 2.jpg";
import imag7 from "../../Assets/website-16\ 2.jpg";
import imag8 from "../../Assets/website-17\ 2.jpg";
import imag9 from "../../Assets/website-19\ 1.jpg";
import imag10 from "../../Assets/website-20\ 1.jpg";
import imag11 from "../../Assets/website-21\ 1.jpg";
import imag12 from "../../Assets/website-22\ 1.jpg";
import imag13 from "../../Assets/website-23\ 1.jpg";
import imag14 from "../../Assets/website-24\ 1.jpg";
import imag15 from "../../Assets/scaffolding-30\ 1.jpg";
import imag16 from "../../Assets/website-25\ 1.jpg";
import imag17 from "../../Assets/website-26\ 2.jpg";
import imag18 from "../../Assets/website-18\ 2.jpg";
import imag19 from "../../Assets/website-27\ 1.png";
import imag20 from "../../Assets/website-28\ 1.jpg";
import imag21 from "../../Assets/warehouse-10\ 1.jpg";

function Cards() {

 return (
<>
<div className="container4">
<h1 className="cardhead">PRODUCT LINE</h1>
<div className="row">
  <div className="column4">
    <div className="box1"> 
    <img src={imag1}/>
    <div className="bord"></div>
      <h3 className="heading1">Aluminum Filter</h3> 
      <p>
      <ul>
          <li><b>Armoured Mesh Filter</b></li>
          <li><b>Custom Filter Of Any Type & Size</b></li>
          <li><b> Grease Filter</b></li>
          <li><b>HVAC Filter</b></li>
          <li><b> Medium & Heavy-Duty Metal Filter</b></li>
          <li><b>Reusable Filter</b></li>
          <li><b>Washable Filter</b></li>
      </ul>
      </p>
    </div>
  </div>


  <div className="column4">
    <div className="box2">
    <img src={imag2}/>
    <div className="bord1"></div>
      <h3 className="heading2">Bolts,Nuts, Washers and Screws </h3>
      <ul>
          <li><b>Anchor Bolt</b></li>
          <li><b>Concrete Screw</b></li>
          <li><b>Drywall Screw</b></li>
          <li><b>Foundation Bolt</b></li>
          <li><b>Hexagon Nut</b></li>
          <li><b>Lock Washer</b></li>
          <li><b>Plain Washer</b></li>
          <li><b>Metric Head Screw</b></li>
          <li><b>Self-Drilling Screw</b></li>
          <li><b>Spring Washer</b></li>
          <li><b>Square Nut</b></li>
          <li><b>Structural Bolt</b></li>
      </ul>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box3">
    <img src={imag3}/>
    <div className="bord2"></div>
      <h3 className="heading3">Cable Tray</h3>
      <p>
        <ul>
          <li><b>Cable Tray Supporting System</b></li>
          <li><b>Cable Tray with Cover</b></li>
          <li><b>Custom Cable Tray</b></li>
          <li><b>Hot Dip Galvanized Available</b></li>
          <li><b>Ladder Cable Tray</b></li>
          <li><b>Powder Coating Available</b></li>
          <li><b>Perforated Cable Tray</b></li>
        </ul>
      </p>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box4">
    <span className="imag4"><img src={imag4} style={{height: "180px"}}/></span>
    <div className="bord3"></div>
      <h3 className="heading4-1">CCTV Pole</h3>
      <p>
        <ul>
          <li><b>Hot Dip Galvanized CCTV Pole Available</b></li>
          <li><b>Powder Coated CCTV Camera Pole</b></li>
          <li><b>Steel Pole</b></li>
          <li><b>Telescopic Camera Pole</b></li>
        </ul>
      </p>
    </div>
  </div>
  </div>
  </div> 

  <div className="row">
  <div className="column4">
    <div className="box5"> 
    <img src={imag5}/>
    <div className="bord"></div>
      <h3 className="heading5">DC Solar Water Pump</h3> 
      <p>
      <ul>
          <li><b>Lower Operational Cost</b></li>
          <li><b>Maintenance Free</b></li>
          <li><b>Zero Electricity Bill</b></li>
          <li><b>HVAC Filter</b></li>
          <li><b>Custom Pump Sizes Available</b></li>
          <li><b>Easy Installation</b></li>
          
      </ul>
      </p>
    </div>
  </div>


  <div className="column4">
    <div className="box6">
    <img src={imag6}/>
    <div className="bord1"></div>
      <h3 className="heading6">Electrical Panel </h3>
      <ul>
          <li><b>ATS (Automatic Transfer Switch)</b></li>
          <li><b>Control Cabinet</b></li>
          <li><b>Distribution Box</b></li>
          <li><b>Lighting Distribution Panel</b></li>
          <li><b>Low Voltage Control Panel</b></li>
          <li><b>Motor Control Centre </b></li>
          <li><b>Power Distribution Panel</b></li>
         
      </ul>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box7">
    <img src={imag7}/>
    <div className="bord2"></div>
      <h3 className="heading7">Fire Bucket</h3>
      <p>
        <ul>
          <li><b>Available in Different Sizes and<br/>Capacities</b></li>
          <li><b>Available with Stand</b></li>
          <li><b>Fire Buckets</b></li>
          <li><b>Powder Coated</b></li>
          <li><b>Resistance Against Corrosion</b></li>
          
        </ul>
      </p>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box8">
    <img src={imag8}/>
    <div className="bord8"></div>
      <h3 className="heading8">Fire Pit</h3>
      <p>
        <ul>
          <li><b>Any depth available</b></li>
          <li><b>Any size available</b></li>
          <li><b>Easy to use</b></li>
          <li><b>Non corrosive</b></li>
          <li><b>Strong durable material </b></li>
        </ul>
      </p>
    </div>
  </div>
  </div>

  <div className="row">
  <div className="column4">
    <div className="box9"> 
    <img src={imag9}/>
    <div className="bord"></div>
      <h3 className="heading9">General Fabrication</h3> 
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


  <div className="column4">
    <div className="box10">
    <img src={imag10}/>
    <div className="bord1"></div>
      <h3 className="heading10">Hot Dip Galvanizing</h3>
      <ul>
          <li><b>Surface Preparation</b></li>
          <li><b> Galvanizing</b></li>
          <li><b>Inspection</b></li>
          <li><b>Automotive, Construction, Electrical & Mechanical Items</b></li>
          <li><b>Corrosion Resistance</b></li>
          <li><b>Long Life</b></li> 
      </ul>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box11">
    <img src={imag11}/>
    <div className="bord2"></div>
      <h3 className="heading11">Pallets and Crates</h3>
      <p>
        <ul>
          <li><b>Cable Reel</b></li>
          <li><b>Industrial Wooden Packages</b></li>
          <li><b>Wooden Boxes</b></li>
          <li><b>Wooden Crates</b></li>
          <li><b>Wooden Frames</b></li>
          <li><b>Wooden Pallets</b></li>
          <li><b>Wooden plywood boxes</b></li>
        </ul>
      </p>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box12">
    <img src={imag12}/>
    <div className="bord8"></div>
      <h3 className="heading12">Paint Shop/Powder Coating</h3>
      <p>
        <ul>
          <li><b>Various Materials, Including Metals,<br/>Plastics, and Medium Density Fiber<br/>board</b></li>
          <li><b>Wide Range of Colors, Styles, Finishes,<br/>and Textures</b></li>
          <li><b>Durable Coatings</b></li>
          <li><b>Less Environmental Impact</b></li>
          <li><b>Efficient Drying Processes</b></li>
          <li><b>Greater Material Utilization </b></li>
        </ul>
      </p>
    </div>
  </div>
  </div>
 
     
  <div className="row">
  <div className="column4">
    <div className="box13"> 
    <img src={imag13}/>
    <div className="bord"></div>
      <h3 className="heading13">Power Transmission Towers</h3> 
      <p>
      <ul>
          <li><b>Accessibility For Maintenance</b></li>
          <li><b>Designed To Perfection</b></li>
          <li><b>Long Life</b></li>
          <li><b>Lower Maintenance Cost</b></li>
          <li><b>Power Line Transmission</b></li>  
      </ul>
      </p>
    </div>
  </div>


  <div className="column4">
    <div className="box14">
    <img src={imag14}/>
    <div className="bord1"></div>
      <h3 className="heading14">Safety Signs</h3>
      <ul>
          <li><b>Fire Equipment Signs</b></li>
          <li><b>Mandatory Signs</b></li>
          <li><b>Prohibition Signs</b></li>
          <li><b>Safe Condition Signs</b></li>
          <li><b>Warning Signs</b></li> 
      </ul>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box15">
    <img src={imag15}/>
    <div className="bord15"></div>
      <h3 className="heading15">Scaffolding</h3>
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
  
  <div className="column4">
    <div className="box16">
    <span className="imag16"><img src={imag16}/></span>
    <div className="bord8"></div>
      <h3 className="heading16">Security Barrier</h3>
      <p>
        <ul>
          <li><b>Triangular Parking Barrier</b></li>
          <li><b>Pointed Barrier</b></li>
          <li><b>Manual Security Barrier</b></li>
          <li><b>Custom Barriers</b></li>
          <li><b>RFID Barrier </b></li>
        </ul>
      </p>
    </div>
  </div>
  </div>

  <div className="row">
  <div className="column4">
    <div className="box17"> 
    <img src={imag17}/>
    <div className="bord"></div>
      <h3 className="heading17">Solar Structure</h3> 
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


  <div className="column4">
    <div className="box18">
    <img src={imag18}/>
    <div className="bord1"></div>
      <h3 className="heading18">Street Lamps/Poles</h3>
      <ul>
          <li><b>Easy Accessibility for Maintenance</b></li>
          <li><b>Economical to Maintain</b></li>
          <li><b>High Mechanical strength</b></li>
          <li><b>Light Weight</b></li>
          <li><b>Longer Life</b></li> 
          <li><b>Withstand Wind Loads</b></li>
      </ul>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box19">
    <img src={imag19}/>
    <div className="bord2"></div>
      <h3 className="heading19">Substation Gantries</h3>
      <p>
        <ul>
          <li><b>220 KV Sub-Station Gantries </b></li>
          <li><b>132KV Sub-Station Gantries</b></li>
          <li><b>Steel Support Structures</b></li>
        </ul>
      </p>
      
    </div>
  </div>
  
  <div className="column4">
    <div className="box20">
    <img src={imag20}/>
    <div className="bord8"></div>
      <h3 className="heading20">Telecom Tower</h3>
      <p>
        <ul>
          <li><b>GSM Antenna Mounts</b></li>
          <li><b>Guyed Mast Towers</b></li>
          <li><b>Monopole Towers</b></li>
          <li><b>Radio Towers</b></li>
          <li><b>Self Supported Towers</b></li>
          <li><b>Telecommunications Towers</b></li>
        </ul>
      </p>
    </div>
  </div>
  </div>


  
 

  <div className="column4">
    <div className="box21">
    <img src={imag21}/>
    <div className="bord8"></div>
      <h3 className="heading21">Warehouse Shelving </h3>
      <p>
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
      </p>
    </div>
  </div>
  
    
  </>
)
}

export default Cards;