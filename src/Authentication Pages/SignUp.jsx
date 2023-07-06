import Navbar from "./Navbar"
import "./SignUp.css"
import google from "../assets/google.svg"
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="signup">
        <Navbar/>
        <div className="signup_block">
            <h2 className="signup_header">Create an account</h2>
            <div className="signup_form">
                <label>
                    Name
                    <input type="text" name="name" id="name"  className="name"/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email"  className="email"/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" id="password"  className="password"/>
                </label>
                <Link to='/dashboard' className="signup_btn">Sign up</Link>
                <div className="section">
                    <hr/><span className="or_div">Or</span><hr/>
                </div>
                <div className="google_signup">
                    <img src={google} alt="google icon" className="google_icon"/>
                    <span className="google_txt">Sign up with Google</span>
                </div>
                <div className="login_option">
                    Already a member?{" "}<Link to='*' className="special_txt">Log in</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp