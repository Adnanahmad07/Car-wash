import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 40.7128, // latitude of the location
        lng: -74.0060 // longitude of the location
    };

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;
