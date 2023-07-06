import "./CreateEvent.css"
import plus from "../assets/plus.svg"
import date2 from "../assets/date2.svg"
import time from "../assets/time.svg"
import down from "../assets/down.svg"
import locate from "../assets/location.svg"
import upload from "../assets/upload.svg"

/* eslint-disable react/prop-types */


const CreateEvent = (props) => {
  return (
    <div style={props.style} className="create_event">
        <div className='home_section new_event_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Create Event</h3>
            </div>
            <div className="event_creation">
                <div className="upload_picture">
                    <img src={upload} className="upload" alt="icon"/>
                </div>
                <label>
                    Event Name
                    <div className="inside_label">
                        <input type="text" name="event-name" id="event-name"  className="event-name name_input" placeholder="Enter event name"/>
                        <div className="add_description"><img src={plus} className="plus" alt="icon"/><span className="button_text">Add Description</span></div>
                    </div>
                    
                </label>
                <label>
                    Organizer
                    <input type="text" name="event-organizer" id="event-organizer"  className="event-organizer" placeholder="Tell attendees who's organizing the event"/>
                </label>
                <div className="start_date_time">
                    <div className="date_time">
                        <span className="date_time_head">Date</span>
                        <div className="date_detail">
                            <img src={date2} className="pick_date" alt="icon"/>
                            <div className="date_info">
                                <span className="date_info1">Start Date</span>
                                <span className="date_info2">July 1, 2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="date_time">
                        <span className="date_time_head">Time</span>
                        <div className="date_detail">
                            <img src={time} className="pick_date" alt="icon"/>
                            <div className="date_info">
                                <span className="date_info1">Start Time</span>
                                <span className="date_info2">12:00pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="date_time_head date_time_txt">+ End Date and Time</div>
                <div className="end_date_time">
                    <div className="date_time">
                        <div className="inside_label dropdown_label">
                            <span className="date_info2">In-person or Virtual</span>
                            <span className="date_button"><img src={down} className="down" alt="icon"/></span>
                        </div>
                    </div>
                    <div className="date_time">
                        <div className="inside_label dropdown_label">
                            <span className="date_info2">Category</span>
                            <span className="date_button"><img src={down} className="down" alt="icon"/></span>
                        </div>
                    </div>
                </div>
                <label>
                    Location
                    <div className="inside_label">
                        <input type="text" name="event-name" id="event-name"  className="event-name name_input" />
                        <span className="date_button"><img src={locate} className="down" alt="icon"/></span>
                    </div>
                </label>
                <label>
                    Description
                    <textarea type="text" name="event-description" id="event-description"  className="event-description"/>
                </label>
                <div className="publish_event">Publish Event</div>
            </div>
        </div>
    </div>
  )
}

export default CreateEvent