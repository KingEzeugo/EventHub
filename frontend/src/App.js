import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Footer from './components/Footer';
import AddEventForm from './components/AddEventForm';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Events />
                <AddEventForm />
                <About />
            </main>
            <Footer />
        </>
    );
};

export default App;
