import "./Navbar.css"
import ges from "../assets/geslogo.svg"


const Navbar = () => {
  return (
    <div className='authentication_navbar'>
        <img src={ges} alt="logo" className="log_logo"/>
    </div>
  )
}

export default Navbar