import "./CreateEvent.css"
import upload from "../assets/upload.svg"
import { useState } from "react"

/* eslint-disable react/prop-types */
import Map from "../components/Map"
import {Form, useActionData, useNavigate} from 'react-router-dom'
import CreateEventSuccess from "./CreateEventSuccess"
import Loading from "./Loading"
import { Spinner } from "flowbite-react"
import TagSelector from "../components/TagSelector"


const CreateEvent = (props) => {
    const [isloading, setIsLoading] = useState(false)
    const isCreated  = useActionData()
    const navigate = useNavigate();

    const [showEndInput, setShowEndInput] = useState(false)
    const [imgUrl, setImgUrl] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    function EndDateAndTime(){
        return(
            <div className="start_date_time">
                    <div className="date_time">
                        <span className="date_time_head">{'End Date'}</span>
                        <input name="stop_date" className="block w-full date_detail" type="date"/>
                    </div>
                    <div className="date_time">
                        <span className="date_time_head">{'End Time'}</span>
                        <input name="stop_time" className="block w-full date_detail" type="time"/>
                    </div>
                </div>
        )
    }

    function showNewImage(e){
        setImgUrl(URL.createObjectURL(e.target.files[0]))
    }

    function afterClosePop(){
        navigate('/dashboard/manage')
        setIsLoading(true)
    }

  return (
    <div style={props.style} className="create_event">
        {isCreated && <CreateEventSuccess isopen afterClose={afterClosePop}/>}
        {isloading && <Loading isopen/>}
        <div className='home_section new_event_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Create Event</h3>
            </div>
            <Form method="POST" className="event_creation" encType="multipart/form-data" onSubmit={() => setIsSubmitting(true)}>
                <div style={{backgroundImage : `url('${imgUrl}')`}} className="upload_picture bg-contain flex flex-col">
                    <input type="file" name="files" id="files" onChange={showNewImage} required/>
                    <label htmlFor="files"><img src={upload} className="upload_icon" alt="icon"/></label>
                </div>
                <label>
                    Event Name
                    <input type="text" name="name" id="event-name"  className=" event-name name_input" placeholder="Enter event name" required/>
                </label>
                <label>
                    Organizer
                    <input type="text" name="organizer" id="event-organizer"  className="event-organizer" placeholder="Tell attendees who's organizing the event" required/>
                </label>
                <div className="start_date_time">
                    <div className="date_time">
                        <span className="date_time_head">Date</span>
                        <input required name="start_date" className="block w-full date_detail" type="date" placeholder="DD/MM/YY"/>
                    </div>
                    <div className="date_time">
                        <span className="date_time_head">Time</span>
                        <input required name="start_time" className="block w-full date_detail" type="time" placeholder="pick"/>
                    </div>
                </div>
                {
                    !showEndInput ?
                    <button onClick={()=> setShowEndInput(true)} className="px-0 mb-3 mt-1 bg-transparent date_time_txt">+ End Date and Time</button>
                    :
                    <>
                        <EndDateAndTime/>
                        <button onClick={()=> setShowEndInput(false)} className="px-0 mb-3 mt-1 bg-transparent date_time_txt">- End Date and Time</button>
                    </>
                }
                <div className="date_time2">
                    <select className="dropdown_label inside_label" name="type" required>
                        <option value="In-person">In-person</option>
                        <option value="Virtual">Virtual</option>
                    </select>
                </div>
                <label>
                    Location
                    <div className="inside_label">
                        <Map />
                    </div>
                </label>
                <label>
                    Description
                    <textarea type="text" name="description" id="event-description"  className="event-description" required/>
                </label>
                <div className="checkbox_div">
                    <p className="date_time_head radio_head">Mode of Entry</p>
                    <span className="Checkbox">
                        <input type="radio" name="ticket" id="" />
                        Ticket only
                    </span>
                    <span className="Checkbox">
                        <input type="radio" name="ticket" id="" />
                        Free
                    </span>
                    
                </div>
                <TagSelector 
                    items={
                        [
                            'party', 'wedding', 'birthday', 'tech', 'graduation', 'educational', 'school',
                            'concert', 'festival', 'sports', 'tournament', 'music', 'food', 'art', 'fashion', 'religious', 'film', 'launch', 'product'
                        ]
                    }
                />
                <div className="publish_div">
                    <button type="submit" className="publish_event">Publish Event {isSubmitting && <Spinner />}</button>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default CreateEvent