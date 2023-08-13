import { useState } from 'react';
import Piechart from "../components/Piechart"
import "./EventAnalytics.css"
import { useLoaderData } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../actions/actions';
import { useEffect } from 'react';
import { formatAMPM } from '../Utilities/utilis';

const EventAnalytics = () => {
    const [chartKey, setChartKey] = useState(0);
    const eventId = useLoaderData()
    const [event, setEvent] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data , error, isLoading } = useSWR(import.meta.env.VITE_SERVER_URL  + `/api/events/${eventId}?populate[0]=cover&populate[1]=createdby`, fetcher, { refreshInterval : 100 });
  
    useEffect(()=>{
      if(data?.data?.attributes) setEvent(data.data.attributes)
    }, [data])
  
    if(event) console.log(event)
    if(isLoading) console.log(isLoading)

  const renderChart = () => {
    setChartKey(chartKey + 3);
  };
  renderChart;

  return (
    <div className="event_analytics">
        <div className='home_section event_analytics_section'>
            <div className='event_analytics_section1'>
                <h3 className='section_head'>Event Analytics</h3>
                <span className="event_analytics_name">{event?.name}</span>
                <span className="event_analytics_date">{formatAMPM(new Date(event?.end || event?.start))}</span>
            </div>
            <div className="event_analytics_info">
                <span className="event_analytics_subhead">Event Info</span>
                <div className="event_analytics_subdiv">
                    <div className="event_visibility">
                        <div className="event_visibility_sub">
                            <span className="event_visibility_name">Live</span>
                            <div className="event_visibility_info">
                                Your event is live on Primavera.
                            </div>
                        </div> 
                        <div className="event_visibility_sub">
                            <span className="event_visibility_name">Public</span>
                            <div className="event_visibility_info">
                                Your event is set to public, for anyone.
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
            <div className="event_analytics_tickets">
                <span className="event_analytics_subhead">Tickets</span>
                <div className="event_analytics_tickets_section">
                    <div className="ticket_pie_chart">
                        <Piechart key={chartKey}/>
                    </div>
                    <div className="pie_chart_details1">
                        <span className="pie_sub_details">
                            <span className="pie_sub_details_head">Sold:</span>
                            <span className="pie_sub_details_detss">100</span>
                        </span>
                        <span className="pie_sub_details">
                            <span className="pie_sub_details_head">Available:</span>
                            <span className="pie_sub_details_detss">1000</span>
                        </span>
                    </div>
                    <div className="pie_chart_details2">
                        <span className="pie_summary">100 tickets / 1000</span>
                    </div>
                </div>
            </div>
            <table>
                <span className="event_analytics_subhead">Registered Attendees</span>
                <tr>
                    <th className='first_one'>Full name</th>
                    <th>Ticket type</th>
                    <th>Ticket ID</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td className='first_one'>Okpara Joel Omehoma</td>
                    <td>Regular</td>
                    <td>7</td>
                    <td>#5000</td>
                </tr>
                <tr>
                    <td className='first_one'>Mary Cole Adebimpe</td>
                    <td>VIP</td>
                    <td>10</td>
                    <td>#10000</td>
                </tr>
                <tr>
                    <td className='first_one'>Victor Ogbonnah</td>
                    <td>VIP</td>
                    <td>9</td>
                    <td>#10000</td>
                </tr>
                <span className='space'>.</span>
            </table>
        </div>
    </div>
  )
}

export default EventAnalytics