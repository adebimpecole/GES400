import Navbar from "./Navbar"
import google from "../assets/google.svg"
import "./Login.css"
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="login">
        <Navbar/>
        <div className="signup_block">
            <h2 className="signup_header">Log in</h2>
            <div className="signup_form">
                <label>
                    Email Address
                    <input type="email" name="email" id="email"  className="email"/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" id="password"  className="password"/>
                </label>
                <div className="signup_btn">Log in</div>
                <div className="section">
                    <hr/><span className="or_div">Or</span><hr/>
                </div>
                <div className="google_signup">
                    <img src={google} alt="google icon" className="google_icon"/>
                    <span className="google_txt">Log in with Google</span>
                </div>
                <div className="login_option">
                    Not a member?{" "} <Link to='/signup' className="special_txt">Sign up</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login