import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero d-flex align-items-center text-center bg-dark text-white py-5">
            <div className="container">
                <h2 className="tagline display-4">Discover, Plan, and Join Community Events</h2>
                <p className="subtitle lead">Your one-stop platform for connecting with your community and exploring events around you.</p>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="#events" className="btn btn-primary btn-lg">Explore Events</a>
                    <a href="#add-event" className="btn btn-primary btn-lg">Add New Event</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
