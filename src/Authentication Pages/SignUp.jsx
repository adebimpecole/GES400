import Navbar from "./Navbar"
import "./SignUp.css"
import google from "../assets/google.svg"
import { Link, Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from 'react-icons/hi';
import { Spinner } from "flowbite-react";

const SignUp = () => {
  let errorMessage = useActionData()
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(()=>{
      if(errorMessage) setIsSubmitting(false)
  }, [errorMessage])

  return (
    <div className="main" onSubmit={() => setIsSubmitting(true)}>
      <Navbar />
      <div className="signup">
        <div className="signup_block relative">
            <h2 className="signup_header">Create an account</h2>
            <Form method="POST" className="signup_form">
                <label>
                    Name
                    <input type="text" name="username" id="name"  className="name" required/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email"  className="email" required/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" id="password"  className="password" required/>
                </label>
                <button to='/dashboard' className="signup_btn relative">{isSubmitting && <Spinner className="right-2 absolute"/>} Sign up</button>
                <div className="section">
                    <hr/><span className="or_div">Or</span><hr/>
                </div>
                <div className="google_signup">
                    <img src={google} alt="google icon" className="google_icon"/>
                    <span className="google_txt">Sign up with Google</span>
                </div>
                <div className="login_option">
                  Already a member? <Link to='/login' className="special_txt">Log in</Link>
                </div>
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
            </Form>
        </div>
      </div>
    </div>
  )
}

export default SignUp