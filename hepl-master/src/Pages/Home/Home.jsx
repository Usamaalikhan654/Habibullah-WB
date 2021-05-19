import React from "react";
import Container from "../../Container/Container";
import styles from "./Home.module.scss";
import Cards from "./Cards";
import Splitscreen from "./Splitscreen";
import Input from "./Inputtype";
import photo from "../../Assets/Ellipse\ 8.jpg";


const Home = () => {
  return (
    <div className="container1">
    <Container>
      {/* legend start */}
      <div className={styles.legend}>
        <div>
          <p className={styles.legendHeading}>
            Committed To Superior <br />
            Quality and Best Results.
          </p>
          <p className={styles.legenSubHeading}>
            We serve and provide engineering solutions to our valued clients.
          </p>
        </div>
      </div>
      {/* legend ends */}

      {/* core feature starts */}
      <div className={styles.coreContainer}>
        <p className={styles.coreHeading}>core features</p>
        <div className={styles.coreHeadingBorder}></div> 
      </div>
      {/* core feature ends */}

      {/* card feature starts */}
      <div className={styles.coreContainer}>
          <Cards/>
      </div>
      {/* card feature ends */}

      {/* Splitscreen starts */}
      <div>
          <Splitscreen/>
      </div>
      {/* Splitscreen ends */}

     {/* Input Fields Starts */}
    <div>
     <Input/>
    </div>
   {/* Input Fields Starts */}
  
   <p>
   <div className={styles.Border}></div> 
     <span className={styles.para}>Privacy Policy</span> <span className={styles.phot}><img src={photo}/></span> <span className={styles.span}>Terms & Conditions</span>
   </p>
  
</Container>
 </div>  
  
      
  );
};

export default Home;
