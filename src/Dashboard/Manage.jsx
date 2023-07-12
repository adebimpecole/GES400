import "./Manage.css"
import bck from "../assets/bckgrnd.png"
import heart from "../assets/heart.svg"
import { useLoaderData } from "react-router-dom"
import { getUserFromSession } from "../hooks/hooks"
import { useState } from "react"

/* eslint-disable react/prop-types */
function EventCard({title, type, url}){
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

const Manage = (props) => {
    const allData = useLoaderData()
    const [createdEvents, setCreatedEvents] = useState(allData.data.filter(data => data.attributes.createdby.data.id == Number(getUserFromSession()?.id)))

    // console.log(createdEvents)
  return (
    <div style={props.style} className="manage">
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Manage</h3>
            </div>
            <h4 className='section_subhead manage_subhead'>Created Events</h4>
            <div className='home_section2 manage_section2'>
                {
                    createdEvents.map(event => 
                        <EventCard 
                            key={event.id}
                            title={event.attributes.name}
                            type={event.attributes.type}
                            url={import.meta.env.VITE_SERVER_URL + event.attributes.cover.data.attributes.url}
                        />)
                }
            </div>
            <h4 className='section_subhead manage_subhead'>Interested Events</h4>
            <div className='home_section2 manage_section2'>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>3.5k Interested</span>
                        <span className='each_filter interested_button'><img src={heart} className='heart' alt='icon'/><span className='interested_text'>Interested</span></span>
                    </div>
                </div>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>3.5k Interested</span>
                        <span className='each_filter interested_button'><img src={heart} className='heart' alt='icon'/><span className='interested_text'>Interested</span></span>
                    </div>
                </div>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>3.5k Interested</span>
                        <span className='each_filter interested_button'><img src={heart} className='heart' alt='icon'/><span className='interested_text'>Interested</span></span>
                    </div>
                </div>
            </div>
            <h4 className='section_subhead manage_subhead'>Paid Events</h4>
            <div className='home_section2 manage_section2'>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>13 July, 2023</span>
                    </div>
                </div>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>13 July, 2023</span>
                    </div>
                </div>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>13 July, 2023</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Manage