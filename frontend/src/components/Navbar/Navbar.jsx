import React, { useState, useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile App")} className={menu === "Mobile App" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Basket" className="icon" /></Link>
          <div className={getTotalCartAmount() ? "dot" : ""}></div>
        </div>

        {!token ? (
          <button className="sign-in-button" onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div
            className="navbar-profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={assets.profile_icon} alt="Profile" />
            {dropdownOpen && (
              <ul className="profile-dropdown">
                <li><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></li>
                <hr />
                <li onClick={handleLogout}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
