import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <FaInstagram/> <FaTwitter/> <FaWhatsapp/> <FaLinkedin/>
      </div>
      <p> &copy; 2022 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer
