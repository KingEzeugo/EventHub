import React, { useState } from 'react';

const AddEventForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('address.')) {
            const addressField = name.split('.')[1];
            setFormData({
                ...formData,
                address: { ...formData.address, [addressField]: value }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataWithCountry = {
            ...formData,
            address: { ...formData.address, country: 'United States' }
        };

        try {
            const response = await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formDataWithCountry)
            });
            if (response.ok) {
                alert('Event added successfully');
                setFormData({
                    title: '',
                    description: '',
                    date: '',
                    address: { street: '', city: '', state: '', zip: '' }
                });
            } else {
                alert('Error adding event');
            }
        } catch (err) {
            console.error(err);
            alert('Error connecting to server');
        }
    };

    return (
        <section id="add-event" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">Add a New Event</h2>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="title" className="form-label">Event Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-control"
                                placeholder="Enter event title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="date" className="form-label">Event Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="form-control"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            className="form-control"
                            rows="4"
                            placeholder="Enter event description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <h4 className="mt-4">Address</h4>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="street" className="form-label">Street</label>
                            <input
                                type="text"
                                id="street"
                                name="address.street"
                                className="form-control"
                                placeholder="Enter street address"
                                value={formData.address.street}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                id="city"
                                name="address.city"
                                className="form-control"
                                placeholder="Enter city"
                                value={formData.address.city}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="state" className="form-label">State</label>
                            <input
                                type="text"
                                id="state"
                                name="address.state"
                                className="form-control"
                                placeholder="Enter state"
                                value={formData.address.state}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="zip" className="form-label">Zip Code</label>
                            <input
                                type="text"
                                id="zip"
                                name="address.zip"
                                className="form-control"
                                placeholder="Enter zip code"
                                value={formData.address.zip}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Submit Event</button>
                </form>
            </div>
        </section>
    );
};

export default AddEventForm;
