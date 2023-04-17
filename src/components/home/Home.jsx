import React from 'react'
// import NavigationBar from '../navbar/navbar'
// import {BrowserRouter} from 'react-router-dom';
import photo1 from './../../images/group1.png';
import './home2.css'

import photo3 from "./../../images/Group 27.png";
import photo2 from "./../../images/Group 12812.png"

import photo4 from "./../../images/small medium business icon.png";
import photo5 from "./../../images/enterprise icn.png";
import photo6 from "./../../images/Group 12852.png"
import photo7 from "./../../images/Group 39.png"


import photo8 from './../../images/street smrt SS.png'
import photo9 from './../../images/local-rank-tracker-screenshot (1).png'
import photo10 from './../../images/Geo grid trakcker SS.png'
import photo11 from './../../images/reputation-builder-SS.png';

import photo12 from './../../images/Union.png';
import photo13 from './../../images/Group 12809.png';
import photo14 from './../../images/Group.png'
import photo15 from './../../images/Group (2).png'
import photo16 from './../../images/Group (1).png'
import photo17 from './../../images/enterprise icon.png'

import photo19 from './../../images/Group 12852.svg';
import photo18 from './../../images/Group 12850.svg';
import photo20 from './../../images/Group 12853.svg';
import photo21 from './../../images/Group 12851.svg';

import photo22 from './../../images/Group 12834.png'
import photo23 from './../../images/Black.png'
import photo24 from './../../images/Brand Logos (2).png'
import photo25 from './../../images/Brand Logos (1).png'
import photo26 from './../../images/Group (3).png'

import photo27 from './../../images/Group 12870.png';
import photo28 from './../../images/Vector7.png'
import photo29 from './../../images/Vector (5).png'
import photo30 from './../../images/Vector (6).png';
import photo31 from './../../images/Group 12801.png'
import photo32 from './../../images/Group 12883.png'

import Card from './card/card';
import logo from '../../images/rightchoicelogo.png';

// import Localsearch from './card2/LocalSearch';

const Home = () => {
    return (
        <div>

            <div className="container1">

                <div className='text1'>
                    <div class="Smart-Marketing-Smart-Business">
                        <div class="text-style-1">Unleash</div>
                        Customer Growth
                        <div className="space1"></div>
                        <div class="text-style-2">Transform Your</div>
                        Local Storefront!
                    </div>

                    <div class="Rectangle-2294">Get Free Business Score </div>
                </div>
                <div className="containerphoto">
                    <img className="photo" src={photo1} alt="local growth" />
                </div>
            </div>

            <div className="container2">
                <div className="trustedby">
                    <span >
                    Join 100+  <span className='style-trustedby'>Growing Brands⚡</span>  
                    </span>
                </div>
                <div className="img2">
                    <img src={photo3} className='trustedbyicons' alt="" />
                </div>

                <div className="img22">

    {/* <div className ="allcompanyicons">
        <div className = "companyicon gomechanicicon "><img   src="./RC website Mobile (2)/Logo_On-White 1.svg" alt=""/></div>
        <div className = "companyicon mysyaraicon"><img  src="./RC website Mobile (2)/mys_logo_magenta 1.svg" alt=""/></div>
        <div className = "companyicon ministryicon"><img  src="./RC website Mobile (2)/Ministry_of_Tourism_India 2.svg" alt=""/></div> 
        <div className = "companyicon prontoicon">  <img  src="./RC website Mobile (2)/Vector Smart Object 2.svg" alt=""/>
        </div >
        <div className = "companyicon ramenicon">    <img  src="./RC website Mobile (2)/Vector Smart Object-1 2.svg" alt=""/>
        </div>
    </div> */}
</div>


                <div className="aboutus">ABOUT US</div>
            </div>
            
            <div className="container3">
                <div className="text1">
                    Right Choice <span class="style">is made for 🌎
                    </span>
                </div>
                <div className="icons">
                    <div className="businessicon icon ">
                        <div className="icon1temp"><img src={photo4} alt="" className="bicon" /></div>
                        <div className="text">Small or medium business</div>
                    </div>

                    <div className="agency icon">
                        <div className="icon1temp"><img src={photo5} alt="" className="aicon" /></div>
                        <div className="text"><div className=" middleicon" > Enterprise Solution</div></div>
                    </div>

                    <div className="multi-location icon">
                        <div className="icon1temp"> <img src={photo6} alt="" className="micon" /></div>
                        <div className="text">Public Sector & Landmarks</div>
                    </div>


                </div>
            </div>

            <div className="container4">
                <div className="text4">
                    <span class="software-that-helps-you-rank-5X-in-local-search">
                        <span class="text-style-1">Tools</span>
                        <span class="text-style-2"></span>
                        that helps you rank
                        <span class="text-style-2"></span>
                        <span class="text-style-3">5X 📈</span>
                        {/* <div className='headingicon4'><img               src={photo29} alt="" /></div> */}

                </span>
            </div>

            <div className="row1">
                <Card cwidth="815px" cheight="338px" heading="Street Smart" text="Manage all your Google Business Profiles from one place" photo={photo8} />
                <Card cwidth="815px" cheight="338px" heading="Local Rank Tracker" text="Effectively track your business local search rankings" photo={photo9} />
            </div>

            <div className="row2">
                <Card cwidth="615px" cheight="338px" heading="Geo Grid Tracker" text="Platform for easy review generation, management, and sharing" photo={photo10} />
                <Card cwidth="615px" cheight="338px" heading="Reputation Builder" text="Effectively track your business local search rankings" photo={photo11} />
            </div>
        </div>
         
         {/* <div className="container5">
                    <div className="text5">
                        <span class="get-the-most-out-of-every-local-search">
                            get the most out of every local
                            <span class="text-style-1">search</span>
                        </span>
                    </div>

<div className="row1">
    <localsearch width = "400px" heading = "Listing Services" text = "Manage all your Google Business Profiles from one place." photo = {photo12} />
    <Card width = "400px" heading = "Web SEO Services" text = "Manage all your Google Business Profiles from one place." photo = {photo13} />
    <Card width = "400px" heading = "Replacement Listing" text = "Manage all your Google Business Profiles from one place." photo = {photo14} />
</div>
 <div className="row2">
<Card width = "400px" heading = "Review Management" text = "Manage all your Google Business Profiles from one place." photo = {photo15} />
<Card width = "400px" heading = "Advanced Analytics" text = "Manage all your Google Business Profiles from one place." photo = {photo16} />
<Card width = "400px" heading = "Advanced Analytics" text = "Manage all your Google Business Profiles from one place." photo = {photo17} />
</div> 

 </div>  */}

<div className="container5">
    
    <div className="text1">
        <div>
            <span class="Level-up-your-local-SEO">
            Level up your
            <span class="text-style-1">&nbsp;local SEO 🔥</span>
            {/* <div className='headingicon5'><img  src={photo31}alt="" /></div> */}
            </span>
            
        </div>
    </div>
    <div className="icons">
        <div className="icon icon1">
            <div className="img">
                <img src={photo18} alt="" />
            </div>
            <span className='percentage'>+80%</span>
                <span class="of-customer-reviews-received-on-average">
                Customer reviews
                </span>
        </div>
        
        <div className="icon icon2 ">
            <div className="img">
                <img src={photo19} alt="" />
            </div>
            <span className='percentage'>+60%</span>
                <span class="of-customer-reviews-received-on-average">
                Storefront Visits
                </span>
        </div>
    
        <div className="icon icon3">
            <div className="img">
                <img src={photo20} alt="" />
            </div>
            <span className='percentage'>+200%</span>
                <span class="of-customer-reviews-received-on-average">
                Map Impressions
                </span>

        </div>
        <div className="icon icon4">
            <div className="img">
                <img src={photo21} alt="" />
            </div >

                <span className='percentage'>+30%</span>
                <span class="of-customer-reviews-received-on-average">
                Website Clicks
                </span>

        </div>  
    </div>
    </div>
    <div className="container6">
        <div className="image"><img src={photo22} alt="GMB insights" /></div>
        <form action="">
            <div className="forum">
                <div className="text1">
                    <span class="Get-quick-access-to-full-product">
                        Get Your New Account. It's <span className='space'></span>
                        <span className="text-style-1">Free! 🔒</span>
                        {/* <div className='headingicon6'><img src={photo32}alt="" /></div> */}
                    </span>
                </div>
                <div className="companyname">
                    <span class="desc">
                    Company name
                    </span>
                    <div className="input">
                        <input type="text" className='Forum-rectange' />
                    </div>
                </div>

                <div className="companyname">
                    <span class="desc">
                    Email
                    </span>
                    <div className="input">
                        <input type="text" className='Forum-rectange' />
                    </div>
                </div>

                <div className="nolocation">
                    <span class="desc">
                    Full Name
                    </span>
                    <div className="input">
                        <input type="text" className='Forum-rectange' />
                    </div>
                </div>

               

                <div className="nmobile">
                    <div className="name">
                        <span class="desc">
                        No. of locations
                        </span>
                        <div className="input">
                            <input type="text" className='Forum-rectange namefield' />
                        </div>
                    </div>
                    <div className="number">
                        <span className='desc'>
                        Mobile
                        </span>
                        <div className="input">
                        <input type="text" className='Forum-rectange numberfield' />
                        </div>
                     </div>
                </div>

                
                <button  type = 'submit' className = "container6-forum-submit">Get free demo</button>
            </div>
            
        </form>
    </div>
    {/* <div className="container7">
    <div className="rightchoiceicon" style ={{position:'relative',left:'0.4vw'}}>
        <img src={logo} className='logo' alt="icon" />
        <span className = "logotext">Right Choice.Ai</span>

    </div>
    <div className='temp'>
    <div className='description'>
    RightChoice.Ai builds tools and provides services that help businesses and agencies with local search marketing. We live and breathe local search and we’re known far and wide for writing and speaking on it.
    </div>
    <div className="icons">
        <span className="fb"><img src={photo23} alt="" /></span>
        <span className="ig"><img src={photo24} alt="" /></span>
        <span className="linkedin"><img src={photo25} alt="" /></span>
        <span className="twitter"><img src={photo26} alt="" /></span>
    </div>
    
    </div>
    <div className='line'></div>
    <div className="alllinks">
        <div className="seosoftware">
            <div class="Local-SEO-Software">
            Local SEO Software
            </div>
            <div>Local Rank Software</div>
            <div >Local citation finder</div>
            <div>Reputation Builder</div>
            
        </div>
        
        <div className="free-tools">Free Tools
            <div>Review Checker</div>
                <div >Google Review Link Generator</div>
                <div>Local SEO Checklist</div>
                <div>GMB Explorer</div>
        </div>
        <div className="seoservice">
            <div>SEO Services</div>
            <div>Listing services</div>
            <div>Citation Building</div>
            
        </div>
        
        
        <div className="footer-company">
             <div>About us</div>
        </div>


        <div className="contactus">
            <div>chooserightai@gmail.com</div>
            <div>94235 28918</div>
        </div>

    </div> */}

    </div >
// </div>
 
  )
}

export default Home
