import { useState } from 'react';
import Piechart from "../components/PieChart"
import "./EventAnalytics.css"

const EventAnalytics = () => {
    const [chartKey, setChartKey] = useState(0);

  const renderChart = () => {
    setChartKey(chartKey + 1);
  };
  renderChart;

  return (
    <div className="event_analytics">
        <div className='home_section event_analytics_section'>
            <div className='event_analytics_section1'>
                <h3 className='section_head'>Event Analytics</h3>
                <span className="event_analytics_name">U2018 CSC Champions League 2023</span>
                <span className="event_analytics_date">13 July, 2023</span>
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
        </div>
    </div>
  )
}

export default EventAnalytics