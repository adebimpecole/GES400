import { useState } from 'react'
import Home from './Home'
import SideNav from './SideNav'
import "./Dashboard.css"
import Manage from './Manage'
import Profile from './Profile'
import Tickets from './Tickets'
import CreateEvent from './CreateEvent'
import CreateEventSuccess from './CreateEventSuccess'

const Dashboard = () => {

   
    const [setDisplayHome, getDisplayHome] = useState({display: "flex"})
    const [setDisplayManage, getDisplayManage] = useState({display: "none"})
    const [setDisplayProfile, getDisplayProfile] = useState({display: "none"})
    const [setDisplayTicket, getDisplayTicket] = useState({display: "none"})
    const [setDisplayEvent, getDisplayEvent] = useState({display: "none"})
    const [setDisplayEventSuccess, getDisplayEventSuccess] = useState({display: "none"})

    // Displays the page when its respective button is clicked and closes the other pages
    const Toggle = (event) => {
        if(event === "home"){
            getDisplayHome({...setDisplayHome, display: "flex"})
            getDisplayProfile({...setDisplayProfile, display: "none"})
            getDisplayManage({...setDisplayManage, display: "none"})
            getDisplayTicket({...setDisplayTicket, display: "none"})
            getDisplayEvent({...setDisplayEvent, display: "none"})
          }
        else if(event === "profile"){
            getDisplayHome({...setDisplayHome, display: "none"})
            getDisplayProfile({...setDisplayProfile, display: "flex"})
            getDisplayManage({...setDisplayManage, display: "none"})
            getDisplayTicket({...setDisplayTicket, display: "none"})
            getDisplayEvent({...setDisplayEvent, display: "none"})
        }
        else if(event === "manage"){
            getDisplayHome({...setDisplayHome, display: "none"})
            getDisplayProfile({...setDisplayProfile, display: "none"})
            getDisplayManage({...setDisplayManage, display: "flex"})
            getDisplayTicket({...setDisplayTicket, display: "none"})
            getDisplayEvent({...setDisplayEvent, display: "none"})
        }
        else if(event === "ticket"){
            getDisplayHome({...setDisplayHome, display: "none"})
            getDisplayProfile({...setDisplayProfile, display: "none"})
            getDisplayManage({...setDisplayManage, display: "none"})
            getDisplayTicket({...setDisplayTicket, display: "flex"})
            getDisplayEvent({...setDisplayEvent, display: "none"})
        }
        else if(event === "event"){
            getDisplayHome({...setDisplayHome, display: "none"})
            getDisplayProfile({...setDisplayProfile, display: "none"})
            getDisplayManage({...setDisplayManage, display: "none"})
            getDisplayTicket({...setDisplayTicket, display: "none"})
            getDisplayEvent({...setDisplayEvent, display: "flex"})
        }
    }

    // closes or opens the event success overlay
    const LiveEvent = (event) => {
        if(event=="close"){
            getDisplayEventSuccess({...setDisplayEventSuccess, display: "none"})
        }
        else{
            getDisplayEventSuccess({...setDisplayEventSuccess, display: "flex"})
        }
    }

  return (
    <div className='dashboard'>
        <SideNav Toggle={Toggle}/>
        <Home style={setDisplayHome}/>
        <Manage style={setDisplayManage}/>
        <Profile style={setDisplayProfile}/>
        <Tickets style={setDisplayTicket}/>
        <CreateEvent style={setDisplayEvent} Live={LiveEvent}/>
        <CreateEventSuccess style={setDisplayEventSuccess} Live={LiveEvent}/>
    </div>
  )
}

export default Dashboard