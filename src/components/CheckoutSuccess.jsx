import "./CheckoutSuccess.css";

const CheckoutSuccess = ({ onClose }) => {
  return (
    <div className="CheckoutSuccess-container">
      <div className="CheckoutSuccess">
        <h2>Checkout</h2>
        <img src="/Public/done-rafiki-1.png" alt="" />
        <h2>Order Placed</h2>
        <p>Your order has been placed successfully</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
