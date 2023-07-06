import "./Tickets.css"

/* eslint-disable react/prop-types */

const Tickets = (props) => {
  return (
    <div style={props.style} className="tickets">
        <div className='home_section'>
            <div className='home_section1'>
                <h3 className='section_head'>Tickets</h3>
            </div>
            <h4 className='section_subhead manage_subhead'>Received</h4>
            <div className="received_tickets">
                <div className="ticket_details">
                    <div className="ticket_detail">
                        <span className="ticket_type">Regular Ticket</span>
                        <span className="ticket_date">Sale ends July 6th</span>
                    </div>
                    <div className="ticket_name">U2018 CSC Champions League...</div>
                    <div className="ticket_price">#5000</div>
                </div>
                <div className="ticket_details">
                    <div className="ticket_detail">
                        <span className="ticket_type">VIP Ticket</span>
                        <span className="ticket_date">Sale ends July 6th</span>
                    </div>
                    <div className="ticket_name">U2018 CSC Champions League...</div>
                    <div className="ticket_price">#5000</div>
                </div>
                <div className="ticket_details">
                    <div className="ticket_detail">
                        <span className="ticket_type">Standard Ticket</span>
                        <span className="ticket_date">Sale ends July 6th</span>
                    </div>
                    <div className="ticket_name">U2018 CSC Champions League...</div>
                    <div className="ticket_price">Free</div>
                </div>                    
            </div>
            <h4 className='section_subhead manage_subhead'>Pending</h4>
            <div className="received_tickets">
                <div className="ticket_details">
                    <div className="ticket_detail">
                        <span className="ticket_type">Regular Ticket</span>
                        <span className="ticket_date">Sale ends July 6th</span>
                    </div>
                    <div className="ticket_name">U2018 CSC Champions League...</div>
                    <div className="ticket_price">#5000</div>
                </div>
                <div className="ticket_details">
                    <div className="ticket_detail">
                        <span className="ticket_type">VIP Ticket</span>
                        <span className="ticket_date">Sale ends July 6th</span>
                    </div>
                    <div className="ticket_name">U2018 CSC Champions League...</div>
                    <div className="ticket_price">#5000</div>
                </div>
                <div className="ticket_details">
                    <div className="ticket_detail">
                        <span className="ticket_type">Standard Ticket</span>
                        <span className="ticket_date">Sale ends July 6th</span>
                    </div>
                    <div className="ticket_name">U2018 CSC Champions League...</div>
                    <div className="ticket_price">Free</div>
                </div>                    
            </div>
        </div>
    </div>
  )
}

export default Tickets