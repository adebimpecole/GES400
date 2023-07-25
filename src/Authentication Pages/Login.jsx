import Navbar from "./Navbar"
import google from "../assets/google.svg"
import "./SignUp.css"
import "./Login.css"
import { Link, Form, useActionData } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";
import { HiInformationCircle } from 'react-icons/hi';
import { useEffect, useState } from "react";


const Login = () => {
    const errorMessage = useActionData()
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(()=>{
        if(errorMessage) setIsSubmitting(false)
    }, [errorMessage])

  return (
    <div className="main">
        <Navbar/>
        <div className="signup">
            <div className="signup_block login_block relative">
                <h2 className="signup_header">Log in</h2>
                <Form method="POST" className="signup_form login_form" onSubmit={() => setIsSubmitting(true)}>
                    <label>
                        Email Address
                        <input type="email" name="identifier" id="email"  className="email" required/>
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" id="password"  className="password" required/>
                    </label>
                    <button type="submit" className="signup_btn relative">{isSubmitting && <Spinner className="right-2 absolute"/>} Log in</button>
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
                <div className="absolute bottom-[-20px] pt-4 pr-4 pl-4 left-0 right-0">
                    {errorMessage &&
                        <Alert
                            color="failure"
                            icon={HiInformationCircle}
                        >
                            <p>{errorMessage.split('/')[0]}</p>
                        </Alert>
                    }
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Login