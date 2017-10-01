import React from 'react';

const Event = props => (
  <div className="event-container">
    <div className="date">{props.date}</div>
    <div className="event">
      <h1>{props.name}</h1>
      <p>Location: {props.location}</p>
      <p>More Details: {props.details}</p>
    </div>
  </div>
);

export default Event;
