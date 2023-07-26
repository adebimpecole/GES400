import { useEffect, useState } from "react";
import "./EventPage.css";
import Modal from "../components/Modal";
import CheckOut from "../components/CheckOut";
import { useLoaderData } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../actions/actions";
import { formatAMPM } from "../Utilities/utilis";
// import { Spinner } from "flowbite-react";
import clock from '../../public/Clock.png'
import calender from '../../public/Calender.png'
import union from '../../public/union.png'
import location from '../../public/mapLocation.png'
import tag from '../../public/Tag.png'


function EventPage() {
  const eventId = useLoaderData()
  const [event, setEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data , error, isLoading } = useSWR(import.meta.env.VITE_SERVER_URL  + `/api/events/${eventId}?populate[0]=cover&populate[1]=createdby`, fetcher, { refreshInterval : 100 });

  useEffect(()=>{
    if(data?.data?.attributes) setEvent(data.data.attributes)
  }, [data])

  if(event) console.log(event)
  if(isLoading) console.log(isLoading)

  return (
    <div className="box z-[2] relative">
    <div className="navbar hidden">
    </div>
    {/* {<div className="absolute top-0 right-0 left-0 h-screen flex justify-center items-center">
        <Spinner size='xl'/>
      </div>} */}
    <div className="EventPageBox relative">
      
      {event &&
        <>
          <div className="EventPage">
            <img className="fleidImg" src={event?.cover?.data?.attributes?.url} alt="Fleid" />
            <h2>{event.name}</h2>
            <h4>In-person event</h4>
          </div>
          <div className="In-person_event">
            <div className="Details">
              <h3>Details</h3>
              <span>
                <img src={clock} alt="clock  icon"/>5 Hrs
              </span>
              <br />
              <span>
                <img src={calender} alt="calender icon"/>
                {formatAMPM(new Date(event.start))} {event.end && ` - ${formatAMPM(new Date(event.end))}`}
              </span>
              <br />
              <span>
                <img src={union} alt="users icon"/>
                Event by {event.organizer}
              </span>
              <br />
              <span>
                <img src={location} alt="location icon"/>
                {event.location}
              </span>
              <br />
              <span>
                <img src={tag} alt="tags icon"/>
                Art & Photography
              </span>
              <h3>Description</h3>
              <p>
                {event.description}
              </p>
              <h3>Tags</h3>
              <span className="Tags">
                {
                  event.category?.split(" ")?.map((tag, i) => <p key={i}>{tag}</p>)
                }
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
        </>
      }
      {
        error && <p>No Event to show</p>
      }
    </div>
      {isModalOpen && <CheckOut setIsModalOpen={setIsModalOpen} />}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
  );
}

export default EventPage;
