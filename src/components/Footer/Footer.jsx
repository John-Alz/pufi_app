import React from 'react'
import logo from '../../assets/footer.png'
import escudo from '../../assets/escudo.png'
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer-sec">
    <div className="main">
      
      
      <div className="logo row">
        <div className="footer-header">
          <img src={logo} className="manik" alt=""/>
        </div>
        {/* <div className="logo-des">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          
          <a href="#" className="btn-know">Know More</a>
        </div> */}
        
        
      </div>
      
      
      
      <div className="office row">
        {/* <div className="footer-header">
          <h3>Office</h3>
        </div> */}
        <div className="link-des">
          <a href="#" className="footer-links">PUFI RAIN</a>
          <a href="#" className="footer-links">PUFI PUFF</a>
          <a href="#" className="footer-links">PUFI CART</a>
          <a href="#" className="footer-links">PUFIN NAP</a>
        </div>
      </div>
      
      
      <div className="link row">
        {/* <div className="footer-header">
          <h3>Links</h3>
        </div> */}
        
        <div className="link-des">
          <a href="#" className="footer-links">CONTACTO</a>
          <a href="#" className="footer-links">AYUDA</a>
          <a href="#" className="footer-links">CÓMO COMPRAR</a>
          <a href="#" className="footer-links">TÉRMINOS & CONDICIONES</a>
        </div>
        
      </div>
      
      
      <div className="newsletter row">
        <div className="footer-header">
          <h3>Newsletter</h3>
        </div>
        <div className="newsletter-des">
          {/* <div className="subcribe"><i className="sub-icon ri-mail-check-fill"></i>
            <input type="mail" placeholder = "Enter Email ID" required/>
            <i className="sub-icon ri-arrow-right-line"></i>
          </div> */}
          <div className="icons">
            <a href="#"><i><FaFacebookF/></i></a>
            <a href="#"><i><FaTwitter/></i></a>
            <a href="#"><i><FaInstagram/></i></a>
            
          </div>
        </div>
      </div>
      
      
    </div>
    <div className="copyright">
    <hr/>
    
    <p>PUFI Copyright 2023 - Todos los derachos reservados.</p>
    </div>
  </footer>

  )
}
