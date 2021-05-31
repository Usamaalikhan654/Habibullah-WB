import React from 'react';
import Container from "../../Container/Container";
import "./About.css";
import Para from "./Para.jsx";
import Info from "./Info.jsx";
import Cert from "./Cert.jsx";
import Last from "./Last.jsx";

const About = () => {

return (
  <Container>
   

      <div>
        <Para/> 
      </div>

      <div>
         <Info/>
      </div>

      <div>
        <Cert/> 
      </div>

       <div>
          <Last/>
       </div>
</Container>

);
};





export default About;