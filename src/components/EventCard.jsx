import heart from "../assets/heart.svg"
import "./EventCard.css"
import { useState } from 'react'
import { Spinner } from "flowbite-react"

const EventCard = ({title, type, url, style, like, afterClick, eventId}) => {
    const [islike, setIsLike] = useState(like)
    const [isLoading, setIsLoading] = useState(false)

    async function switchLike(){
        setIsLoading(true)
        if(afterClick){
            await afterClick(islike, eventId)
            setIsLike(!islike) 
            setIsLoading(false)
        }
        else{
            setIsLike(!islike)
            setIsLoading(false)
        }
    }

    return(
        <div className={style}>
            <div className='picture_div' onClick={switchLike}>
                {isLoading && <Spinner className='absolute top-2 left-2' size='md'/>} 
                <img src={url} className='event_img' alt='image'/>
                {islike?
                    <p className='heart_icon' >💜</p>
                    :
                    <p className='heart_icon' >🤍</p>
                    // <img src={heart} alt='icon' className='heart_icon'/>
                }
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