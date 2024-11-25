import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className="event-date">Date: {event.date}</p>
            <p className="event-address">Address: {event.address}</p>
        </div>
    );
};

export default EventCard;
