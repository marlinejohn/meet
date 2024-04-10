const Event = ({event}) => {
    return (
      <li>
         <h3>{event.summary}</h3>
         <p>{event.created}</p>
         <p>{event.location}</p>
      </li>
    );
  }
  
  export default Event;