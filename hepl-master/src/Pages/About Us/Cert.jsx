import react from 'react';
import pic from "../../Assets/HEPLPROFILE final-19.jpg";
import "./Cert.css";
import link1 from "../About Us/HEPLPROFILE final-19.jpg";


function Cert () {

    return (
        <div className="contain2">
          <div className="iso-cert">
            <div>
                <h1 className="head1">ISO CERTIFICATE</h1>
                <span className="pic"><img src={pic}/></span>
            </div>

            <div className="button1">
            <a href={link1} download><span>DOWNLOAD ISO CERTIFICATE</span></a>
            </div>
            </div>
        </div>
    )
}



export default Cert;