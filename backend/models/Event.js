const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true},
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {type: String, required: true},
        state: {type: String,required: true},
        zip: {type: String, required: true},
        country: {type: String, required: true},
    },
});

module.exports = mongoose.model('Event', EventSchema);
