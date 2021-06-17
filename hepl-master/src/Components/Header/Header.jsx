import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../Assets/logo.png";
import messsageIcon from "../../Assets/messageIcon.png";
import callIcon from "../../Assets/callIcon.png";
import searchIcon from "../../Assets/searchIcon.png";
import menuIcon from "../../Assets/menu.png";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const data = 
    [
      {
        
        "firstname": "Home",
        "url":  "https://usamaalikhan654.github.io/Habibullah-WB/#/"
 
      },
      {

        "firstname": "About Us",
        "url":  "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/about"
        
      },
      {
       
        "firstname": "Product",
        "url":  "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/Product"

      },
      {
        
        "firstname": "Machine",
        "url":  "http://https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/Machine"
   
      },
      {
       
        "firstname": "Contact Us",
        "url":  "https://usamaalikhan654.github.io/Habibullah-WB/#/Habibullah-WB/Contact"
        
      }

   
    ]

  
 const [searchTerm, setsearchTerm] = useState('');
 const [showText, setShowText] = useState(false);


  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={Logo} className={styles.logo} />
        </div>
        <div className={styles.leftContainer}>
          <div className={styles.leftContent}>
            <div className={styles.box}>
              <img src={messsageIcon} className={styles.icon} />
              <p className={styles.boxText}>info@hepl.com.pk</p>
            </div>

            <div className={styles.box}>
              <img src={callIcon} className={styles.callIcon} />
              <p className={styles.boxText}>0300-011-hepl (4375)</p>
            </div>

            <div className={styles.inputBox}>
              <input
                className={styles.input}
                placeholder="Search Keyword Here"
                onChange={(event) => {setsearchTerm(event.target.value);}}
                onFocus={() => setShowText(!showText)}
                onBlur={() => setShowText(!showText)}
               
              />
              <img src={searchIcon} className={styles.searchIcon} />
              {showText && 
              <div className={styles.ParentKeyword}>
              {data.filter((val) => {
                if (searchTerm == ""){
                  return val
                } else if (val.firstname.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((val,key) => {
                return <div className="keyword" key={key}>
                <a href={val.url}>{val.firstname}</a>
                </div>
              })}
              </div>
              }
            </div>
          </div>
        </div>
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.menuBox}>
          <div className={styles.menuContainerBox}>
            <Link to="/"><p className={styles.menuItem}>HOME</p></Link>
            <Link to="/about"><p className={styles.menuItem}>ABOUT US</p></Link>
            <Link to="/Product"><p className={styles.menuItem}>PRODUCT LINE</p></Link>
            <Link to="/Machine"><p className={styles.menuItem}>MACHINERY AND TOOLS</p></Link>
            <Link to="/Contact"><p className={styles.menuItem}>CONTACT US</p></Link>
          </div>
        </div>
      </div>

      {/* menu for mobile */}
      <div className={styles.mobileMenuContainer}>
        <img
          onClick={() => setMobileMenu(!mobileMenu)}
          src={menuIcon}
          className={styles.menuIcon}
        />
        {mobileMenu ? (
          <div className={styles.dropDown}>
          
            <div className={styles.dopDownMenuBox}>
            <Link to="/"><p className={styles.dropdownMenuItem}>HOME</p></Link>
            </div>
            
            <div className={styles.dopDownMenuBox}>
            <Link to="/about"><p className={styles.dropdownMenuItem}>ABOUT US</p></Link>
            </div>
            <div className={styles.dopDownMenuBox}>
            <Link to="/Product"><p className={styles.dropdownMenuItem}>PRODUCT LINE</p></Link>
            </div>
            <div className={styles.dopDownMenuBox}>
            <Link to="/Machine"><p className={styles.dropdownMenuItem}>MACHINERY AND TOOLS</p></Link>
            </div>
            <div className={styles.dopDownMenuBox}>
            <Link to="/Contact"><p className={styles.dropdownMenuItem}>CONTACT US</p></Link>
            </div>
          </div>
        ) : null}
      </div>
      {/* menu for mobile */}
    </div>
  );
}

export default Header;
