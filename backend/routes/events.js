const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

// GET all events
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        console.log("Fetched Events:", events); // Debug log
        res.json(events);
    } catch (err) {
        console.error("Error fetching events:", err.message);
        res.status(500).json({ message: err.message });
    }
});


// POST to add a new event
router.post('/', async (req, res) => {
    // Validate the presence of required fields
    const { title, description, date, address } = req.body;

    if (!title || !description || !date || !address) {
        return res.status(422).json({ message: 'Missing required fields: title, description, date, or address' });
    }

    if (!address.street || !address.city || !address.state || !address.zip || !address.country) {
        return res.status(422).json({ message: 'Missing required address fields: street, city, state, zip, or country' });
    }

    const event = new Event({
        title,
        description,
        date,
        address: {
            street: address.street,
            city: address.city,
            state: address.state,
            zip: address.zip,
            country: address.country,
        },
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
