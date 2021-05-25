import React from 'react';
import Container from "../../Container/Container";
import Cards from "./Cards.jsx";
import "./Product.css";

const Product = () => {

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
            <Cards/>
        </div>


          </Container>

    );
};


export default Product;