import React from "react";
import Container from "../../Container/Container";
import "./Contact.css";
import Form from "./Form.jsx";

const Contact = () => {

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
              <Form/>
          </div>
        </Container>
  );
};




export default Contact;