import "./CreateEventSuccess.css"
import { useState } from "react"
import { Spinner } from "flowbite-react"


/* eslint-disable react/prop-types */

const Loading = ({isopen, afterClose}) => {
  const [isOpen, setIsOpen] = useState(isopen)


  function close(){
    setIsOpen(false)
    afterClose()
  }

  return (
    <div className='event_success' style={{visibility: isOpen? 'visible' : 'hidden'}}>
        <div className="overlay">
          <div className="">
            <Spinner size='xl'/> 
          </div>
        </div>
    </div>
  )
}

export default Loading