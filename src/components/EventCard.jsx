import React from 'react'
import heart from "../assets/heart.svg"
import "./EventCard.css"

const EventCard = ({title, type, url, style}) => {
    return(
        <div className={style}>
            <div className='picture_div'>
                <img src={url} className='event_img' alt='image'/>
                <img src={heart} alt='icon' className='heart_icon'/>
            </div>
            <div className='event_info'>
                <h5 className='event_name'>{title}</h5>
                <span className='event_booking'>{type}</span>
                <span className='event_popularity'>3.5k Interested . 1.5k Going</span>
            </div>
        </div>
    )
}



export default EventCard