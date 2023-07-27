import "./CheckOut.css";

const CheckOut = ({ onClose, setSwitchModal }) => {
  return (
    <div className="CheckOutPage-container">
      <div className="container">
        <div className="CheckOut">
          <h3>CheckOut</h3>
          <h4>Ticket Name</h4>
          <form className="Form" action="">
            <div className="FirstName">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your FirstName"
              />
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your LastName"
              />
            </div>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="abc@example.com" />
            <label htmlFor="">Phone Number</label>
            <input type="number" name="" id="" placeholder="+234" />
          </form>
          <p>Gender</p>
          <span className="Checkbox">
            <input type="checkbox" name="" id="" />
            Male
          </span>
          <span className="Checkbox">
            <input type="checkbox" name="" id="" />
            Female
          </span>
          <span className="terms">
            <p>
              By clicking Register , I agree to the{" "}
              <strong>Primavera Terms of Service</strong>
            </p>
            <button onClick={() => setSwitchModal(false)}>Checkout</button>
            <button onClick={onClose}>Cancel</button>
          </span>
        </div>
        <div className="OrderSummary">
          <img src="/Public/Studio.png" alt="" />
          <h3>Order summary</h3>
          <span>
            <p>2x Regular Ticket</p>
            <span>
              <p>₦10,000</p>
            </span>
          </span>
          <span>
            <p>2x VIP Ticket</p>
            <span>
              <p> ₦20,000</p>
            </span>
          </span>
          <span>
            <h3>Total</h3>
            <span>
              <h3>₦30,000</h3>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
