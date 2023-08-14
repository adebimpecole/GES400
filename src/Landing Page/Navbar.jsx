import "./Navbar.css"
import "./LandingPage.css"
import ges from "../assets/geslogo.svg"
import { HiOutlineBars3, HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";


const Navbar = () => {
  const Opennav = () => {
    document.querySelector(".nav2").classList.add('open');
    document.querySelector(".nav2").classList.remove('closes');
  }
  const Closenav = () => {
    document.querySelector(".nav2").classList.add("closes")
    document.querySelector(".nav2").classList.remove('open');
  }
  return (
    <div className='navbar'>
            {/* <span className="side_name1 nav_logo">Easy<span className="different">Events</span></span> */}
            <img src={ges} alt="logo" className="ges"/>
        <div className='real_nav'>
            <HiOutlineBars3 className="bar" onClick={Opennav}/>
            
            <ul className='nav'>
                <li className='sub_nav'><Link to="/login" className="sub_link">Login</Link></li>
                <li className='sub_nav sub_nav_button'><Link to="/signup " className="sub_link tab">Create a free account</Link></li>
            </ul>
            <ul className='nav2'>
              <span className="close_span"><HiMiniXMark className="x" onClick={Closenav}/></span>
              
                <li className='sub_nav'><Link to="/login" className="sub_link">Login</Link></li>
                <li className='sub_nav sub_nav_button'><Link to="/login" className="sub_link">Create a free account</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar