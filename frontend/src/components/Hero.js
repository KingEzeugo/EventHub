import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero d-flex align-items-center text-center bg-dark text-white py-5">
            <div className="container">
                <h2 className="tagline display-4">Discover, Plan, and Join Community Events</h2>
                <p className="subtitle lead">Your one-stop platform for connecting with your community and exploring events around you.</p>
                <a href="#events" className="btn btn-primary btn-lg mt-3">Explore Events</a>
            </div>
        </section>
    );
};

export default Hero;
