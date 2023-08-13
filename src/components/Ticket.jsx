import "../Dashboard/Tickets.css"

const Ticket = ({eventName, userName, ticketType, price, ticketId}) => {
  return (
    <div className="ticket_details">
        <div className="ticket_name">{eventName?.length > 30 ? eventName.slice(0,30) + '...' : eventName}</div>
        <span className="ticket_owner">{userName}</span>
        <span className="ticket_type">{ticketType || 'VIP'}</span>
        <div className="ticket_detail">
            <div className="ticket_price">{price}</div>
            <span className="ticket_id">{ticketId}</span>
        </div>
    </div>    
  )
}

export default Ticket