import React from 'react';
import { NavLink } from 'react-router-dom';
// import {Switch } from 'react-router-dom';
import "./navbar.css"
import logo from '../../images/rightchoicelogo.png';

function NavigationBar() {
  return (
    
    <div className = "navbar">

      <ul className = "navbar-nav">
      <button className='login-button'>Request Access</button>
      <li className="nav-item"><NavLink className = "nav-link" to="/blog">Blog</NavLink></li>

        <li className="nav-item"><NavLink className = "nav-link" to="/software">Software</NavLink></li>
        <li className="nav-item"><NavLink className = "nav-link" to="/services">Services</NavLink></li>
        <li className="nav-item"><NavLink className = "nav-link" to="/industries">Industries</NavLink></li>
        <li className="nav-item"><NavLink className = "nav-link" to="/">Home</NavLink></li>

      </ul>
    
    <div className="rightchoiceicon">
        <img src={logo} className='logo' alt="icon" />
        <span className = "logotext">Right Choice.Ai</span>

    </div>
    </div>
    
  );
  
}

export default NavigationBar;
