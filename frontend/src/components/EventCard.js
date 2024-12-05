import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p className="event-date">Date: {new Date(event.date).toLocaleDateString()}</p>
            <p className="event-address">
                Address: {event.address.street}, {event.address.city}, {event.address.state}, {event.address.zip}, {event.address.country}
            </p>
        </div>
    );
};


export default EventCard;
