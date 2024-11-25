import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import Map from './Map';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/events');
                setEvents(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchEvents();
    }, []);

    return (
        <section id="events" className="events-section">
            <div className="container">
                <h2 className="section-title">Upcoming Events</h2>
                <div className="event-cards">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
                <Map events={events} />
            </div>
        </section>
    );
};

export default Events;
