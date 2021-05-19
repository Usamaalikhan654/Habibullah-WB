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
       {/* legend start */}
       <div className="legend">
        <div>
          <p className="legendHeading">
            Committed To Superior <br />
            Quality and Best Results.
          </p>
          <p className="legenSubHeading">
            We serve and provide engineering solutions to our valued clients.
          </p>
        </div>
      </div>
      {/* legend ends */}

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