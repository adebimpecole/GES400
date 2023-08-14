import "./LandingPage.css"
import Navbar from './Navbar'
import pic from "../assets/secondpic.png"
import ill1 from "../assets/ill1.svg"
import ill2 from "../assets/ill2.svg"
import ill3 from "../assets/ill3.svg"
import visa from "../assets/Visa.svg"
import stripe from "../assets/Stripe.svg"
import master from "../assets/Mastercard.svg"
import paypal from "../assets/PayPal.svg"
import wed1 from "../assets/wedding1.jpeg"
import cheer from "../assets/cheers.jpeg"
import watch from "../assets/watch.jpeg"
import { AiOutlineInstagram } from "react-icons/ai";
import { LiaFacebookSquare } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import ges from "../assets/geslogo.svg"


const LandingPage = () => {
  return (
    <div className="landing_page">
        
        <div className='landing_page_begins'>
            <div className='first_section'>
                <div className="first_overlay">
                    <Navbar/>
                    <div className='first_section_container'>
                        <h2 className='page_header'>Curate and manage your events all in one place.</h2>
                        <div className='first_text'></div>
                        <div className='first_buttons'>
                            <Link to="/signup" className='first_button1'>Create a free account</Link>
                            <Link to="/login" className='link first_button_text'> Discover Events</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='second_section'>
                <div className='second_section_container'>
                    <h2 className='second_header'>Who we are</h2>
                    <div className='first_text'>
                        EasyEvents is an event ticketing platform for experiences in Africa. Create live or virtual events, sell tickets and collect payments.
                    </div>
                </div>
                <img className="second_pic" alt="pic" src={pic}/>
            </div>
            <div className='third_section'>
                <h2 className='second_header'>Why EasyEvents?</h2>
                <div className='third_sub_section'>
                    <div className="third_sub1">
                        <img className="third_illustration" alt="illustration" src={ill1}/>
                        <div className="third_sub1_text">
                            <h1 className="third_head">Enjoy detailed analytics in real time</h1>
                            <div className="third_text first_text">
                                Empowers organizers with the tools to create, manage, and optimize successful events in a rapidly changing landscape.
                            </div>
                        </div>
                    </div>
                    <div className="third_sub1">
                        <img className="third_illustration" alt="illustration" src={ill2}/>
                        <div className="third_sub1_text">
                            <h1 className="third_head">Experience Swift and Secure ticketing systems</h1>
                            <div className="third_text first_text">
                                With our intuitive design, secure transactions,and real-time updates, event organizers can ensure a hassle- free and enjoyable journey for both attendees and themselves.
                            </div>
                        </div>
                    </div>
                    <div className="third_sub1">
                        <img className="third_illustration" alt="illustration" src={ill3}/>
                        <div className="third_sub1_text">
                            <h1 className="third_head">Made for Hosts and Attendees of all Kinds</h1>
                            <div className="third_text first_text">
                                An all-encompassing service that accommodates a diverse range of event types, from corporate conferences and trade shows to music festivals. Hosts can easily create and manage events, regardless of their nature or size.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_text">Multiple payment options at your disposal</div>
                    <div className="payment_sub_section">
                        <img className="payment_card" src={master} alt="pay"/>
                        <img className="payment_card" src={stripe} alt="pay"/>
                        <img className="payment_card" src={visa} alt="pay"/>
                        <img className="payment_card" src={paypal} alt="pay"/>
                    </div>
                </div>
            </div>
            <div className="fourth_section">
                <h2 className='second_header fourth_style'>Dedicated To Ensuring Your Events Success</h2>
                <div className="fourth_grid">
                    <img className="image_grid1" alt="grid" src={wed1}/>
                    <img className="image_grid2" alt="grid" src={cheer}/>
                    <img className="image_grid3" alt="grid" src={watch}/>
                </div>
            </div>
            <div className="fifth_section">
                <div className="fifth_div">
                    <h2 className='second_header width_header'>Try Hosting on EasyEvents</h2>
                    <div className='first_buttons sub_button'>
                        <Link to="/signup" className='first_button1'>Create a free account</Link>
                        <Link to="/login" className='first_button_text'>Discover Events</Link>
                    </div>
                </div>
            </div>
            <div className="sixth_section ">
                <div className="second_header sixth_style">
                    Our Goal at EasyEvents is to become the Home of <span className="differ">10k Hosts</span> by 2024
                </div>
            </div>
            <div className="fifth_section seventh_section ">
                <div className="fifth_div seventh_div">
                    <h2 className='second_header width_header'>Discover Events All Around You</h2>
                    <div className='first_buttons'>
                        <Link to="/signup" className='first_button1 seventh_button1'>Sign in</Link>
                    </div>
                </div>
            </div>
            <div className="eighth_section ">
                <div className="second_header eight_style">
                    Curate and Manage Events with EasyEvents
                </div>
                <div className='first_buttons down'>
                    <Link to="/signup" className='first_button1'>Create a free account</Link>
                    <Link to="/login" className='first_button_text'>Discover Events</Link>
                </div>
                <div className="logo_socials">
                        <img src={ges} alt="logo" className="ges_logo"/>
                    <span className="home_socials">
                        <LiaFacebookSquare/>
                        <AiOutlineInstagram/>
                        <FiTwitter/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage