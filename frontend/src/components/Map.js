import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = ({ events }) => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 40.7128, // Default to New York
        lng: -74.0060,
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
                {events.map((event, index) => (
                    <Marker key={index} position={{ lat: event.lat, lng: event.lng }} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
