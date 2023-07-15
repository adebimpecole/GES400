import "./Home.css"
import date from "../assets/date.svg"
import search from "../assets/search.svg"
import location from "../assets/location.svg"
import { useLoaderData } from "react-router";
import EventCard from "../components/EventCard"

/* eslint-disable react/prop-types */


const Home = (props) => {
    const allData = useLoaderData()
    console.log(allData)


  return (
    <div className='home' style={props.style}>
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Home</h3>
                <h4 className='section_subhead'>Discover Events</h4>
                <div className='filters'>
                    <span className='each_filter'><img src={location} className='filter_icon' alt='icon'/><span className='filter_text'>Location</span></span>
                    <span className='each_filter'><img src={date} className='filter_icon' alt='icon'/><span className='filter_text'>Any date</span></span>
                    <span className='each_filter'><span className='filter_text'>Top</span></span>
                    <span className='each_filter'><span className='filter_text'>Following</span></span>
                    <span className="search_box"><img src={search} className="search_icon" alt="icon"/><input type="text" className="search" placeholder="Search events"/></span>
                </div>
            </div>
            <div className='home_section2'>
                {
                    allData?.data?.map(data => 
                        <EventCard 
                         key={data.id} 
                         title={data.attributes.name} 
                         type={data.attributes.type} 
                        //  url={import.meta.env.VITE_SERVER_URL + data.attributes.cover.data.attributes.url}
                         url={data.attributes.cover.data.attributes.url}
                         style={"event"}
                        />
                    )
                }
                {
                    !allData && <p className="italic text-gray-300">No Events yet</p>
                }
            </div>
        </div>
    </div>
  )
}

export default Home