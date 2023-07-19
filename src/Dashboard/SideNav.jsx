import home from "../assets/home.svg"
import list from "../assets/list.svg"
import prof from "../assets/profile.svg"
import ticket from "../assets/ticket.svg"
import add from "../assets/new.svg"
import "./SideNav.css"
import { Link } from "react-router-dom";
import { useState } from "react"


/* eslint-disable react/prop-types */


const SideNav = (props) => {
  // const remove = document.getElementsByClassName("link");
  // const remove2 = document.getElementsByClassName("navigate");
  const [current, setCurrent] = useState(0)



  return (
    <div className="sidenav">
        <h3 className='company_name side_name'>Primavera</h3>
        <ul className='side_navigation'>
            <li className={'navigate our_home ' + `${current == 0? 'active' : null}`} onClick={() => setCurrent(0)}>
              <Link to="./" className='link  '>
                <img src={home} alt='icon' className='navigation_icon'/><span className='navigation_text'>Home</span>
              </Link>
            </li>
            <li className={`navigate our_manage ${current == 1? 'active' : null}`} onClick={() => setCurrent(1)}>
              <Link to="./manage" className='link' >
                <img src={list} alt='icon' className='navigation_icon'/><span className='navigation_text'>Manage</span>
              </Link>
            </li>
            <li className={'navigate our_profile file:' + `${current == 2? 'active' : null}`} onClick={() => setCurrent(2)} >
              <Link to="./profile" className='link'>
                <img src={prof} alt='icon' className='navigation_icon'/><span className='navigation_text'>Profile</span>
              </Link>
            </li>
            <li className={'navigate our_tickets ' +  `${current == 3? 'active' : null}`} onClick={() => setCurrent(3)}>
              <Link to="./tickets" className='link'>
                <img src={ticket} alt='icon' className='navigation_icon'/><span className='navigation_text'>Tickets</span>
              </Link>
            </li>
            <li className={'navigate our_new_event ' + `${current == 4? 'active' : null}`} onClick={() => setCurrent(4)}>
              <Link to="./create" className='link'>
                <img src={add} alt='icon' className='navigation_icon'/><span className='navigation_text'>Create event</span>
              </Link>
            </li>

        </ul>
    </div>
  )
}

export default SideNav