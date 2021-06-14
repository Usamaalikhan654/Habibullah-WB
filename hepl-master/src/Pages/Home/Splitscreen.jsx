import React from 'react';
import './Splitscreen.css';
import image  from "../../Assets/pexels-tiger-lily-4483610\ 1.jpg";


function Splitscreen() {


  return (
  
   <div className="container5">
   <div className="visible-desk">

       <h2>Why Choose Us</h2> 
 
     <div className="head4">
        <h2>Delivering Quality Engineered Products.</h2>
    </div>
    <div>
    <p className="content">
            Habibullah Engineering (Pvt) Ltd. (HEPL) offers complete
            electrical & mechanical engineered custom solutions. We
            provide initial planning to final construction for a variety of
            projects with engineering solutions as per client’s
            requirements.<br/>
            HEPL has the ability to complete projects on a comprehensive
            turnkey or partial basis. We take pride in offering customized
            deliver high quality products through our qualified trained
            staff.<br/>
            HEPL has industrial arrangements focused on the manufacturing and fabrication of custom engineered products.
        </p>
    </div>
   </div>

<div className="visible-mobile">
  <div className="splitscreen-bg">
  <h2 className="heading-2">Why Choose Us</h2> 
  <h2 className="h6">Delivering Quality Engineered Products.</h2>
  <p className="contentMobile">Habibullah Engineering (Pvt) Ltd. (HEPL) offers complete electrical mechanical engineered custom solutions. We provide initial planning to final construction for a variety of projects with engineering solutions as per client’s requirements.HEPL has the ability to complete projects on a comprehensive turnkey or partial basis. We take pride in offering customized deliver high quality products through our qualified trained staff.HEPL has industrial arrangements focused on the manufacturing and fabrication of custom engineered products. At HEPL, we are committed to providing cli ents with best engineered solution within their budget and time frame.</p>
  </div>
</div>
  </div>         
  )

}



export default Splitscreen;