import React from 'react'
import photo1 from './../../../images/chevron_right_FILL0_wght400_GRAD0_opsz48.png'
import './card.css'

const Card = (props) => {
  return (
    <div className="container">
    <div className='texts'>
        <div className="heading">
            <h2>{props.heading}</h2>
        </div>
        <div className="text">
            {props.text}
        </div>
        <div className="learnmore">
            <div className="text">Learn More</div>
            <div className="icon"><img src={photo1} alt="" /></div>
        </div>
    </div>
    <div className="image">
        <img src={props.photo} alt="" />

    </div>
    </div>

    
  )
}

export default Card
