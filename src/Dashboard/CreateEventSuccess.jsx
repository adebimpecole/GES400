import "./CreateEventSuccess.css"
import close from "../assets/icon-close.svg"
import illustration from "../assets/illustration.svg"

/* eslint-disable react/prop-types */

const CreateEventSuccess = (props) => {
  const Live = () => {
    props.Live("close")
  }
  return (
    <div className='event_success' style={props.style}>
        <div className="overlay">
          <div className="event_success_section">
            <div className="close_image_div">
              <img src={close} className="close_icon" alt="icon" onClick={Live}/>
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