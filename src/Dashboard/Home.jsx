import "./Home.css"
import date from "../assets/date.svg"
import location from "../assets/location.svg"
import heart from "../assets/heart.svg"
import bck from "../assets/bckgrnd.png"

/* eslint-disable react/prop-types */


const Home = (props) => {
  return (
    <div className='home' style={props.style}>
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Home</h3>
                <h4 className='section_subhead'>Discover Events</h4>
                <div className='filters'>
                    <span className='each_filter'><img src={location} className='filter_icon' alt='icon'/><span className='filter_text'>Location</span></span>
                    <span className='each_filter'><img src={date} className='filter_icon' alt='icon'/><span className='filter_text'>Any date</span></span>
                    <span className='each_filter'><span className='filter_text'>Top</span></span>
                    <span className='each_filter'><span className='filter_text'>Following</span></span>
                </div>
            </div>
            <div className='home_section2'>
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
        </div>
    </div>
  )
}

export default Home