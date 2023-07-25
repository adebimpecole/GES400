import { useState } from "react";
import "./EventPage.css";
import Modal from "../components/Modal";
import CheckOut from "../components/CheckOut";

function EventPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="EventPage">
        <img className="fleidImg" src="/Public/fleid.png" alt="Fleid" />
        <h2>Cyprus Photo Exhibition</h2>
        <h4>In-person event</h4>
        <div className="In-person_event">
          <div className="Details">
            <h3>Details</h3>
            <span>
              <img src="/Public/Clock.png" alt="" />5 Hrs
            </span>
            <br />
            <span>
              <img src="/Public/Calender.png" alt="" />
              July 10, 10 AM - July 10, 5 PM
            </span>
            <br />
            <span>
              <img src="/Public/union.png" alt="" />
              Event by University of PortHarcourt
            </span>
            <br />
            <span>
              <img src="/Public/mapLocation.png" alt="" />
              Abuja Campus, Choba
            </span>
            <br />
            <span>
              <img src="/Public/Tag.png" alt="" />
              Art & Photography
            </span>
            <h3>Description</h3>
            <p>
              Richard Sprengeler will discuss his latest B&W architectural
              project at Cementland. This talk will include the history &
              mystery of Cementland and will review the work created and ... See
              more
            </p>
            <h3>Tags</h3>
            <span className="Tags">
              <p>Art</p>
              <p>Photograph</p>
              <p>Wine</p>
              <p>Indoors</p>
            </span>
          </div>
          <div className="Tickets">
            <h3>Tickets</h3>
            <p>Type</p>
            <h5>VIP - ₦10,000</h5>
            <h5>Regular - ₦5,000</h5>
            <h5>Student - ₦2,500</h5>
            <div className="Quantities">
              <p>Quantity</p>
              <input type="number" name="" id="" />
              <p>Amount</p>
              <input type="number" name="" id="" />
            </div>
            <button onClick={() => setIsModalOpen(true)}>Checkout</button>
          </div>
        </div>
        <div className="About">
          <h2>About your Host</h2>
          <span>
            <img src="/Public/ellipse-14.png" alt="" /> University of
            PortHarcourt
          </span>
          <p>
            Richard Sprengeler will discuss his latest B&W architectural project
            at Cementland. This talk will include the history & mystery of
            Cementland and will review the work created and ... See more
          </p>
          <h3>Has hosted 25 events on Primavera</h3>
          <span>
            <img src="/Public/facebook.png" alt="" />
            <img src="/Public/instagram.png" alt="" />
            <img src="/Public/twitter.png" alt="" />
            <img src="/Public/globe.png" alt="" />
          </span>
        </div>
      </div>
      {isModalOpen && <CheckOut setIsModalOpen={setIsModalOpen} />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default EventPage;
