import React from 'react'
import photo1 from './../../../images/Vector (4).png'
import './card2.css'
const Localsearch = (props) => {
  return (
    <div className="container"  >
    <div className='texts'>
        <div className="heading">
            <h2>{props.heading}</h2>
        </div>
        <div className="text">
            {props.text}
        </div>
        <div className="learnmore">
            <div className="text2">Learn More</div>
            <span className='icon'><img src={photo1} alt="" /> </span>
            
        </div>
    </div>
    <div className="image">
        <img src={props.photo} alt="" />

    </div>
    </div>
  )
}

export default Localsearch
