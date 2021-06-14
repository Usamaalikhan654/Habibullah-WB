import React from "react";
import formpic from "../../Assets/website-19.jpg";
import "./Form.css"
import formpic1 from "../../Assets/Rectangle\ 110.jpg";
import formpic2 from "../../Assets/Rectangle\ 108.jpg";
import formpic3 from "../../Assets/Rectangle\ 109.jpg";
import formpic4 from "../../Assets/Rectangle\ 92.jpg";
import formpic6 from "../../Assets/Group\ 1.png";
import formpic7 from "../../Assets/Group2.png";
import formpic8 from "../../Assets/Group3.png";
import formpic10 from "../../Assets/website-12.png";
import formpic11 from "../../Assets/website-13.png";
import formpic12 from "../../Assets/website-17.png";
import formpic13 from "../../Assets/website-18.png";
import formpic14 from "../../Assets/website-14.png";
import formpic15 from "../../Assets/website-18.png";
import { Component } from "react";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Axios from 'axios';


  export default function Form() {
   
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_dyt8nbj', e.target, 'user_bgqJpE58sM4p2OVzSDoE6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    // const url=""
    // const [data,setData] = useState ({
    //   user_name:"",
    //   phone_number:"",
    //   email:"",
    //   subject:"",
    //   company:"",
    //   message:""
    // })

    // function submit(e){
    //   e.preventDefault();
    //   Axios.post(url,{
    //     user_name: data.user_name,
    //     phone_number: data.phone_number,
    //     email: data.email,
    //     subject: data.subject,
    //     company: data.company,
    //     message: data.message
    //   })
    //   .then(res => {
    //      console.log(res.data)
    //   })
    // }

    //  function handle(e){
    //       const newdata={...data}
    //       newdata[e.target.id]= e.target.value
    //       setData (newdata)
    //       console.log(newdata)
    //  }
      // const [toSend, setToSend] = useState({
      //   user_name: '',
      //   phone_number: '',
      //   email: '',
      //   subject: '',
      //   company:'',
      //   message:''
      // });
    
      // const onSubmit = (e) => {
      //   e.preventDefault();
      //   send(
      //     'service_qr4ch2m',
      //     'template_dyt8nbj',
      //     toSend,
      //     'user_bgqJpE58sM4p2OVzSDoE6'
      //   )
      //     .then((response) => {
      //       console.log('SUCCESS!', response.status, response.text);
      //     })
      //     .catch((err) => {
      //       console.log('FAILED...', err);
      //     });
      // };
    
      // const handleChange = (e) => {
      //   setToSend({ ...toSend, [e.target.name]: e.target.value });
      // };
         

    return (
    <div className="cont1">
           <div className="row-5">
                 <div className="column-5">
                       <div className="column-pic">
                          <img src={formpic6}/>
                       </div>
                      <div className="column-card">
                      <h1 class="form-head">OFFICE LOCATION</h1>
                     <p className="form-para">1104, 11th Floor, Uni Tower,I.I Chundrigar Road Karachi,Pakistan 74000</p>
                        <a href="https://www.google.com/maps/search/Habibullah+Engineering+(Pvt)+Limited,+Uni+Tower,+1104,+11th+Floor,+I.I+Chundrigar+Rd,+Seari+Quarters,+Karachi,+Karachi+City,+Sindh+74400,+Pakistan/@24.8499219,67.0046981,17z/data=!3m1!4b1">
                        <h2 class="form-head1">Get Directions</h2>
                        </a>
                      </div>
                 </div>

                 <div className="column-5">
                        <div className="column-pic">
                          <img src={formpic7}/>
                       </div>
                      <div className="column-card">
                      <h1 class="form-head2">CALL US</h1>
                      <p class="form-para1">0300-011-hepl (4375)</p>
                      <a href="tel:0300-011-hepl (4375)"><h2 class="form-head3">Call Now</h2></a>
                      </div>
                 </div>

                 <div className="column-5">
                       <div className="column-pic">
                          <img src={formpic8}/>
                       </div>
                      <div className="column-card">
                      <h1 class="form-head4">EMAIL ADDRESS</h1>
                      <p class="form-para2">info@hepl.com.pk</p>
                      <a href="mailto:info@hepl.com.pk"><h2 class="form-head5">Mail Us</h2></a>
                      </div>
                 </div>
                 <div className="column-6">
                 <h1 class="form-head6">CONTACT FORM</h1>
                 </div> 

                 <div className="column-6">
                 <form onSubmit={sendEmail}>
        <div className="row-6">
          <div className="column-7">
          <span className="form-pic14"><img src={formpic14} style={{height: "40px"}}/></span>
          <input type="text" className="form-control"  name="user_name" placeholder="Enter Your Name" required/>
          </div>

          <div className="column-7">
          <span className="form-pic14"><img src={formpic10} style={{height: "28px"}}/></span>
          <input type="text" className="form-control"  name="phone_number"    placeholder="Enter Your Number" required/>
          </div>

          <div className="column-7">
          <span className="form-pic11"><img src={formpic11} style={{height: "62px"}}/></span>
          <input type="text" className="form-control"   name="email"    placeholder="Enter Your Email" required/>
          </div>
        </div>

        <div className="row-6">
          <div className="column-7">
          <span className="form-pic12"><img src={formpic12} style={{height: "50px"}}/></span>
          <input type="text" className="form-control"  name="subject"    placeholder="Enter Your Subject" required/>
          </div>

          <div className="column-7">
          <span className="form-pic15"><img src={formpic15} style={{height: "50px"}}/></span>
          <input type="text" className="form-control"   name="company"    placeholder="Enter Your Company Name " required/>
          </div>

        </div>

           <div className="row-6">
                <div className="column-8">
                <span className="form-pic13"><img src={formpic13} style={{height: "50px"}}/></span>
                <textarea className="text"    name="message"  placeholder="Enter Your Message Here"></textarea>
                </div>
           </div>
           <div className="row-6">
                       <div className="column-9">
                       
                      <button  className="form-col">VERIFY AND SEND MESSAGE</button>
                       </div>
                 </div>       
        </form>  
               
                 </div>            
           </div>
       
         <div className="maps">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.407828025631!2d67.00469811454944!3d24.84991698405884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5d10af36ab%3A0xd183395c3d14a978!2sHabibullah%20Engineering%20(Pvt)%20Limited!5e0!3m2!1sen!2s!4v1622723195884!5m2!1sen!2s" style={{width:"100%"},{height:"608px"}}></iframe>
         </div>
    </div>
    )
 

  }

