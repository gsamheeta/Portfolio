import "./FooterStyles.css";

import React from "react";

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaVoicemail } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="footer">
           <div className="footer-container">
              <div className="left">
                    <div className="location">
                     <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        <div>
                          <p>2251 Pimmit Dr, Falls Church.</p>
                          <p>Virginia, USA</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        +1 (571)-507-5756</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        gsamheeta@vt.edu</h4>
                    </div>
              </div>

              <div className="right">
                 <h4>Connect with me on</h4>
                 {/* <p>I enjoy coding and making new projects</p> */}
                    <div className="social">
                    <a href="https://www.linkedin.com/in/samheeta-gourammolla-400361251/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} /></a>

                    <a href="https://www.instagram.com/samheeta_g/" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} /></a>

                       {/* <FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem" }} />
                       <FaInstagram size={20} style={{color: "#fff", marginRight: "1rem" }} />
                       <FaMailBulk size={20} style={{color: "#fff", marginRight: "1rem" }} /> */}
                  
                    </div>
              </div>
            </div> 
        </div>
    )
}

export default Footer;