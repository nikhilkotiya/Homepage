import React from 'react';
import { NavLink } from 'react-router-dom';
// import {Switch } from 'react-router-dom';
import "./navbar3.css"
import logo from '../../images/rightchoicelogo.png';
import photo1 from '../../images/menu.png'
function NavigationBar() {
  return (
    
    <div className = "navbar">
       <div className="rightchoiceicon">
        <img src={logo} className='logo' alt="icon" />
        <span className = "logotext">RightChoice.Ai</span>
        </div>
      <ul className = "navbar-nav">
        
        <li className="nav-item"><NavLink className = "nav-link" to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink className = "nav-link" to="/industries">Industries</NavLink></li>
        <li className="nav-item"><NavLink className = "nav-link" to="/services">Services</NavLink></li>
        <li className="nav-item"><NavLink className = "nav-link" to="/software">Software</NavLink></li>

        <li className="nav-item"><NavLink className = "nav-link" to="/blog">Blog</NavLink></li>
        <button className='login-button'>Get Free Audit</button>
        <div className="mnavbar"><img src={photo1} className='mnavbaricon' alt="" /></div>
        

      </ul>
        
     

    
    
    
    </div>
    
  );
  
}

export default NavigationBar;
