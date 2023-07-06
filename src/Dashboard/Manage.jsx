import "./Manage.css"
import bck from "../assets/bckgrnd.png"
import heart from "../assets/heart.svg"


/* eslint-disable react/prop-types */

const Manage = (props) => {
  return (
    <div style={props.style} className="manage">
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Manage</h3>
            </div>
            <h4 className='section_subhead manage_subhead'>Created Events</h4>
            <div className='home_section2 manage_section2'>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>3.5k Interested . 1.5k Going</span>
                    </div>
                </div>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>3.5k Interested . 1.5k Going</span>
                    </div>
                </div>
                <div className='event'>
                    <img src={bck} className='event_img' alt='image'/>
                    <div className='event_info'>
                        <h5 className='event_name'>Cyprus Photo Exhibition New york 2023</h5>
                        <span className='event_booking'>In-person</span>
                        <span className='event_popularity'>3.5k Interested . 1.5k Going</span>
                    </div>
                </div>
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