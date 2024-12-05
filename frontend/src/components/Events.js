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
        <section id="events" className="events-section py-5">
            <div className="container">
            <h2 className="section-title text-center mb-5">Upcoming Events</h2>
            <div className="row g-4">
                {events.map((event, index) => (
                    <div className="col-md-4" key={index}>
                        <EventCard event={event} />
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <Map events={events} />
            </div>
            </div>
        </section>
    );
};

export default Events;
