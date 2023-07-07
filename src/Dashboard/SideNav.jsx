import home from "../assets/home.svg"
import list from "../assets/list.svg"
import prof from "../assets/profile.svg"
import ticket from "../assets/ticket.svg"
import add from "../assets/new.svg"
import "./SideNav.css"
import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */


const SideNav = (props) => {
  // const remove = document.getElementsByClassName("link");
  const remove2 = document.getElementsByClassName("navigate");


  const Active = (event) => {
    for(let r=0; r<remove2.length; r++){
      if(remove2[r].classList.contains("active")){
        remove2[r].classList.remove('active');
      }
    }
    event.currentTarget.classList.add('active');
    console.log(event.currentTarget.classList)
    if(event.currentTarget.classList.contains("our_home")){
      props.Toggle("home")
    }
    else if(event.currentTarget.classList.contains("our_manage")){
      props.Toggle("manage")
    }
    else if(event.currentTarget.classList.contains("our_profile")){
      props.Toggle("profile")
    }
    else if(event.currentTarget.classList.contains("our_tickets")){
      props.Toggle("ticket")
    }
    else if(event.currentTarget.classList.contains("our_new_event")){
      props.Toggle("event")
    }
  };
  return (
    <div className="sidenav">
        <h3 className='company_name side_name'>Primavera</h3>
        <ul className='side_navigation'>
            <li className='navigate active our_home' onClick={Active}>
              <Link to="./" className='link  '>
                <img src={home} alt='icon' className='navigation_icon'/><span className='navigation_text'>Home</span>
              </Link>
            </li>
            <li className='navigate  our_manage' onClick={Active}>
              <Link to="./manage" className='link' >
                <img src={list} alt='icon' className='navigation_icon'/><span className='navigation_text'>Manage</span>
              </Link>
            </li>
            <li className='navigate our_profile' onClick={Active} >
              <Link path="/cart" className='link'>
                <img src={prof} alt='icon' className='navigation_icon'/><span className='navigation_text'>Profile</span>
              </Link>
            </li>
            <li className='navigate our_tickets' onClick={Active}>
              <Link path="/cart" className='link'>
                <img src={ticket} alt='icon' className='navigation_icon'/><span className='navigation_text'>Tickets</span>
              </Link>
            </li>
            <li className='navigate our_new_event' onClick={Active}>
              <Link to="./create" className='link'>
                <img src={add} alt='icon' className='navigation_icon'/><span className='navigation_text'>Create event</span>
              </Link>
            </li>

        </ul>
    </div>
  )
}

export default SideNav