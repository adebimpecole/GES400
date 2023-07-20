import "./CreateEventSuccess.css"
import closeIcon from "../assets/icon-close.svg"
import illustration from "../assets/illustration.svg"
import { useState } from "react"

/* eslint-disable react/prop-types */

const CreateEventSuccess = ({isopen, afterClose}) => {
  const [isOpen, setIsOpen] = useState(isopen)


  function close(){
    setIsOpen(false)
    afterClose()
  }

  return (
    <div className='event_success' style={{visibility: isOpen? 'visible' : 'hidden'}}>
        <div className="overlay">
          <div className="event_success_section">
            <div className="close_image_div">
              <img src={closeIcon} className="close_icon" alt="icon" onClick={close}/>
            </div>
            <h3 className="event_success_section_header">Events</h3>
            <img src={illustration} className="event_success_section_illustration" alt="illustration"/>
            <div className="event_success_section_details">
              <h3 className="event_success_section_subhead">Your Event is Live!</h3>
              <div className="event_success_section_text">Your event has been created successfully</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateEventSuccess