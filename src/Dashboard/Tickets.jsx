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
                  <div className="ticket_name">U2018 CSC Champions League...</div>
                  <span className="ticket_owner">Okpara Joel Omehoma</span>
                  <span className="ticket_type">Regular Ticket</span>
                  <div className="ticket_detail">
                      <div className="ticket_price">#5000</div>
                      <span className="ticket_id">5jeu35</span>
                  </div>
                </div>
                <div className="ticket_details">
                  <div className="ticket_name">HOD’s Cup 2023</div>
                  <span className="ticket_owner">Okpara Joel Omehoma</span>
                  <span className="ticket_type">VIP Ticket</span>
                  <div className="ticket_detail">
                      <div className="ticket_price">#10000</div>
                      <span className="ticket_id">5jeu35</span>
                  </div>
                </div> 
                <div className="ticket_details">
                  <div className="ticket_name">U2018 CSC Champions League...</div>
                  <span className="ticket_owner">Okpara Joel Omehoma</span>
                  <span className="ticket_type">Regular Ticket</span>
                  <div className="ticket_detail">
                      <div className="ticket_price">#5000</div>
                      <span className="ticket_id">5jeu35</span>
                  </div>
                </div>                 
            </div>
            <h4 className='section_subhead manage_subhead'>Pending</h4>
            <div className="received_tickets">
            <div className="ticket_details">
                  <div className="ticket_name">U2018 CSC Champions League...</div>
                  <span className="ticket_owner">Okpara Joel Omehoma</span>
                  <span className="ticket_type">Regular Ticket</span>
                  <div className="ticket_detail">
                      <div className="ticket_price">#5000</div>
                      <span className="ticket_id">5jeu35</span>
                  </div>
                </div>
                <div className="ticket_details">
                  <div className="ticket_name">HOD’s Cup 2023</div>
                  <span className="ticket_owner">Okpara Joel Omehoma</span>
                  <span className="ticket_type">VIP Ticket</span>
                  <div className="ticket_detail">
                      <div className="ticket_price">#10000</div>
                      <span className="ticket_id">5jeu35</span>
                  </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Tickets