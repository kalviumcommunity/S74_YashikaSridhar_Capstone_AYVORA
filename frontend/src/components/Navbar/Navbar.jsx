import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {

  const[menu,setMenu] = useState("Home")


  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile App")}  className={menu==="Mobile App"?"active":""}>Mobile App</li>
        <li onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket" className="icon" />
          <div className="dot"></div>
        </div>
        <button className="sign-in-button" onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
