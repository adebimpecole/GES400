import "./CheckOut.css";
import "../Dashboard/CreateEvent.css"
import bck from "../assets/bckgrnd.png"

/* eslint-disable react/prop-types */


const CheckOut = ({ onClose, setSwitchModal }) => {
  return (
    <div className="CheckOutPage-container">
      <div className="container">
        <div className="CheckOut">
          <div className="check_out">
            <h3 className="single_event_name checkout_name">Checkout</h3>
            <h4 className="details_head checkout_head">Ticket Name</h4>
            <form className="event_creation checkout_form" action="">
              <div className="FirstName">
                <label htmlFor="">
                  First Name
                  <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your first name"
                />
                </label>
                
                <label htmlFor="">
                  Last Name
                  <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your last name"
                />
                </label>
              </div>
              <div className="other_input">
              <label htmlFor="">
                Email
                <input type="email" name="" id="" placeholder="abc@example.com" />
              </label>
              <label htmlFor="">
                Phone Number
                <input type="number" name="" id="" placeholder="+234" />
              </label>
              </div>
              <div className="checkbox_div">
                <p className="checkbox_head">Gender</p>
                <span className="Checkbox">
                  <input type="radio" name="gender" id="" />
                  Male
                </span>
                <span className="Checkbox">
                  <input type="radio" name="gender" id="" />
                  Female
                </span>
              </div>
            </form>
            
            <span className="terms">
              <p className="agree">
                <input type="checkbox" name="" id="" required/>
                <span> By clicking Register, I agree to the{" "} <strong>Primavera Terms of Service</strong>
                </span>
              </p>
              <div className="checkout_buttons">
                <button onClick={() => setSwitchModal(false)}>Checkout</button>
                <button onClick={onClose}>Cancel</button>
              </div>
            </span>
          </div>
          <div className="OrderSummary">
            <img src={bck} alt="" className="summary_image"/>
            <h3 className="summary_head">Order summary</h3>
            <span className="summary_details">
              <p>2x Regular Ticket</p>
              <span>
                <p>₦10,000</p>
              </span>
            </span>
            <span className="summary_details">
              <p>2x VIP Ticket</p>
              <span>
                <p> ₦20,000</p>
              </span>
            </span>
            <span className="total_summary">
              <h3>Total</h3>
              <span>
                <h3>₦30,000</h3>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
