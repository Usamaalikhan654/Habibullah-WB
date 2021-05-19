import React from "react";
import formpic from "../../Assets/website-19.jpg";
import "./Form.css"
import formpic1 from "../../Assets/Rectangle\ 110.jpg";
import formpic2 from "../../Assets/Rectangle\ 108.jpg";
import formpic3 from "../../Assets/Rectangle\ 109.jpg";
import formpic4 from "../../Assets/Rectangle\ 92.jpg";
import formpic6 from "../../Assets/website-10\ 3.jpg";
import formpic7 from "../../Assets/website-12\ 1.jpg";
import formpic8 from "../../Assets/website-13\ 1.jpg";
import formpic10 from "../../Assets/website-12.png";
import formpic11 from "../../Assets/website-13.png";
import formpic12 from "../../Assets/website-17.png";
import formpic13 from "../../Assets/website-18.png";
import formpic14 from "../../Assets/website-14.png";
import formpic15 from "../../Assets/website-18.png";

function Form () {
    return (
    <div className="cont1">
    <div>
            <span className="form-pic"><img src={formpic}/></span>
        </div>
        <div>
             <span className="form-pic1"><img src={formpic1}/></span>
             
        </div>
       
        <div>
        <span className="form-pic2"><img src={formpic2}/></span>
        <span className="form-pic3"><img src={formpic3}/></span>
        <span className="form-pic4"><img src={formpic4}/></span>
       </div>
       <div className="form-pic5"><span className="form-pic6"><img src={formpic6}/></span>
           <h1 className="form-head">OFFICE LOCATION</h1>
           <p className="form-para">1104, 11th Floor, Uni Tower,<br/>
              I.I Chundrigar Road Karachi,<br/>
                  Pakistan 74000
           </p>
           <a href="https://www.google.com/maps/place/Habibullah+Engineering+(Pvt)+Limited/@24.849917,67.0068868,15z/data=!4m5!3m4!1s0x0:0xd183395c3d14a978!8m2!3d24.849917!4d67.0068868" target="_blank"><h2 className="form-head1">Get Directions</h2></a>
       </div>
        <div className="form-circle"><span className="form-pic7"><img src={formpic7}/></span>
             
             <h1 className="form-head2">CALL US</h1>
             <p className="form-para1">0300-011-hepl (4375)</p>
             <a href="tel:0300-011-hepl (4375)"><h2 className="form-head3">Call Now</h2></a>
        </div>
        <div className="form-circle1"><span className="form-pic8"><img src={formpic8}/></span>
             
             <h1 className="form-head4">EMAIL ADDRESS</h1>
             <p className="form-para2">info@hepl.com.pk</p>
             <a href = "mailto:info@hepl.com.pk"><h2 className="form-head5">Mail Us</h2></a>
        </div>
        <div>
        <h1 className="form-head6">CONTACT FORM</h1>
        <div className="form-input">
        <span className="form-pic14"><img src={formpic14} style={{height: "40px"}}/></span>
        <input type="text" className="form-control" style={{paddingLeft: "65px"}} placeholder="Enter Your Name" required/>
        </div>
        
        <div className="form-input1">
        <span className="form-pic10"><img src={formpic10} style={{height: "80px"}}/></span>
        <input type="text" className="form-control" style={{paddingLeft: "65px"}} placeholder="Enter Your Number" required/>
      </div>

        <div className="form-input2">
        <span className="form-pic11"><img src={formpic11} style={{height: "80px"}}/></span>
        <input type="text" className="form-control" style={{paddingLeft: "65px"}} placeholder="Enter Your Email" required/>
      </div>

      <div className="form-input3"> 
        <span className="form-pic12"><img src={formpic12} style={{height: "50px"}}/></span>
        <input type="text" className="form-control" style={{paddingLeft: "65px"}} placeholder="Enter Your Subject" required/>
    </div> 

    <div className="form-input4"> 
        <span className="form-pic15"><img src={formpic15} style={{height: "50px"}}/></span>
        <input type="text" className="form-control" style={{paddingLeft: "65px"}} placeholder="Enter Your Company Name " required/>
    </div>
      <div>
        <span className="form-pic13"><img src={formpic13} style={{height: "50px"}}/></span>
        <textarea className="text" placeholder="Enter Your Message Here"></textarea>
    </div>
        <span className="form-border"></span>
        <span className="form-col">VERIFY AND SEND MESSAGE</span>
        </div>

         
    </div>
    )
}




export default Form;