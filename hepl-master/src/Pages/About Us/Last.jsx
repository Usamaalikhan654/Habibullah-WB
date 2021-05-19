import React from 'react';
import  './Last.css';
import pic1 from "../../Assets/pexels-lex-photography-1109541\ 1.jpg";
import pic2 from "../../Assets/pexels-gustavo-fring-4254172\ 1.jpg";
import pic3 from "../../Assets/Group\ 84.jpg";
import pic4 from "../../Assets/Rectangle\ 127.jpg";

function Last () {
    
    return (
        <div className="row">
        <div className="column3">
        <div className="pic1">
          <img src={pic1}/>
        </div>
           <span className="pic4"><img src={pic4}/></span>
           <span className="pic2"><img src={pic2}/></span>
           <span className="pic3"><img src={pic3}/></span>   
        </div>
        <div className="column3">
          <h2 className="lasthead1">ABOUT US</h2>
          <p className="lastpara">HSE POLICY | Iso certificate| Vision and Mission</p>
          <h1 className="lasthead2">Electrical and Mechanical<br/>Engineered Custom Solutions.</h1>
          <p className="lastpara1">
Habibullah Engineering (Pvt) Ltd. (HEPL) offers complete electrical &
mechanical engineered custom solutions. We provide initial planning to final
construction for a variety of projects with engineering solutions as per client’s
requirements.<br/><br/>
HEPL has the ability to complete projects on a comprehensive turnkey or
partial basis. We take pride in offering customized deliver high quality
products through our qualified trained staff.<br/><br/>
HEPL has industrial arrangements focused on the manufacturing and
fabrication of custom engineered products.<br/><br/>
We utilize the latest technology available in producing the finest quality
products. All raw material and finished products pass through a stringent QA/
QC process under the supervision of well trained and capable experts.<br/><br/>
At HEPL, we are committed to providing clients with best engineered solution
within their budget and time frame.

</p>

        </div>
      </div>

    )
}




export default Last;