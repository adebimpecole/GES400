import React from 'react'

const EventCard = ({title, type, url}) => {
    return(
        <div className='event'>
            <img src={url} className='event_img' alt='image'/>
            <div className='event_info'>
                <h5 className='event_name'>{title}</h5>
                <span className='event_booking'>{type}</span>
                <span className='event_popularity'>3.5k Interested . 1.5k Going</span>
            </div>
        </div>
    )
}



export default EventCard