import Navbar from "./Navbar"
import google from "../assets/google.svg"
import "./SignUp.css"
import "./Login.css"
import { Link, Form } from "react-router-dom";


const Login = () => {
  return (
    <div className="main">
        <Navbar/>
        <div className="signup">
            <div className="signup_block login_block">
                <h2 className="signup_header">Log in</h2>
                <Form method="POST" className="signup_form login_form">
                    <label>
                        Email Address
                        <input type="email" name="identifier" id="email"  className="email" required/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" id="password"  className="password" required/>
                    </label>
                    <button type="submit" className="signup_btn">Log in</button>
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
                </Form>
            </div>
        </div>
    </div>
  )
}

export default Login