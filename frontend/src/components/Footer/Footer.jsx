import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.logo} alt="Ayvora Logo" className="footer-logo" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, soluta fugiat culpa sit cum modi nesciunt dignissimos totam doloribus error. Sint quibusdam eligendi, illo minima soluta dicta magnam culpa esse.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <li>+1 555 123-4567</li>
                <li>contact@ayvora.com</li>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">Copyright © 2025 Ayvora. All rights reserved.</p>
    </div>
  
  )
}

export default Footer
