import React from 'react'
// import NavigationBar from '../navbar/navbar'
// import {BrowserRouter} from 'react-router-dom';
import photo1 from './../../images/group1.png';
import './home.css'

import photo3 from "./../../images/Group 27.png";
import photo2 from "./../../images/Group 12812.png"

import photo4 from "./../../images/businness icon.png";
import photo5 from "./../../images/Group 37.png";
import photo6 from "./../../images/Group 38.png"
import photo7 from "./../../images/Group 39.png"


import photo8 from './../../images/street smrt SS.png'
import photo9 from './../../images/local-rank-tracker-screenshot (1).png'
import photo10 from './../../images/Geo grid trakcker SS.png'
import photo11 from './../../images/reputation-builder-SS.png';
import Card from './card/card';
const Home = () => {
  return (
    <div>
        
         <div className="container1">
            
            <div className='text1'>
                    <div class="Smart-Marketing-Smart-Business">
                        <div class="text-style-1">Smart</div>
                        Marketing.
                        <div class="text-style-2">Smart</div>
                        Business.
                    </div>
                <div class="Make-the-right-choice-for-your-online-business">
                    Make the
                    <span class="text-style-1">right choice</span>
                    for your
                    online business
                </div>
                <div class="Rectangle-2294">Get Free Business Score </div>
            </div>
                <div className="containerphoto">
                    <img className = "photo" src={photo1} alt="photo"  />
                </div>
         </div>

         <div className="container2">
            <div className="img1">
                <img src={photo2} alt="" className="trustedby" />
            </div>
            <div className="img2">
                <img src={photo3} className='trustedbyicons' alt="" />
            </div>
            <div className="text1">
            <span class="Brands-find-RightChoiceAi-essential-for-their-business-growth">
                Brands find
                <span class="text-style-1">RightChoice.Ai</span>
                essential for their business growth
            </span>
            </div>
            <div className="text2">
                <span class="RightChoiceAis-software-services-will-help-your-businesses-rank-better-and-drive-more-conversion">
                <span class="text-style-1">RightChoice.Ai's</span>
                software & services will help your businesses rank better and drive more conversions from Google
                </span>
            </div>

            <div className="aboutus">ABOUT US</div>
         </div>

         <div className="container3">
            <div className="text1">
                Right Choice <span class="style">is made for</span>
            </div>
            <div className="icons">
                <div className="businessicon icon ">
                    <img src={photo4} alt="" className="bicon" />
                    <div className="text">Small/medium business</div>
                </div>

                <div className="agency icon">
                    <img src={photo5} alt="" className="aicon" />
                    <div className="text"> Agencies & Marketers</div>
                </div>

                <div className="multi-location icon">
                    <img src={photo6} alt="" className="micon" />
                    <div className="text">Multi-location enterprises</div>
                </div>

                <div className="public-sector icon">
                    <img src={photo7} alt="" className="picon" />
                    <div className="text">Public Sector</div>                
                </div>
            </div>
         </div>

        <div className="container4">
        <div className="text4">
         <span class="get-the-most-out-of-every-local-search">
            get the most out of every local
        <span class="text-style-1">search</span></span>
         </div>

         <div className="row1">
            <Card heading = "Street Smart" text = "Manage all your Google Business Profiles from one place" photo = {photo8}/>
            <Card heading = "Local Rank Tracker" text = "Effectively track your business local search rankings" photo = {photo9}/>        
         </div>
         
         <div className="row2">
            <Card heading = "Geo Grid Tracker" text = "Platform for easy review generation, management, and sharing" photo = {photo10}/>
            <Card heading = "Reputation Builder" text = "Effectively track your business local search rankings" photo = {photo11}/>        
         </div>
        </div>
         
    </div>
  )
}

export default Home
