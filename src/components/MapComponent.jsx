import React, { useState, useRef } from 'react';
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Autocomplete } from '@react-google-maps/api';


const mapStyles = { height: '400px', width: '100%' };
const defaultCenter = { lat: 41.2995, lng: 69.2401 }; // Tashkent

const MapComponent = ({ onLocationSelect }) => {
    const autocompleteRef = useRef(null);
  
    const handlePlaceChanged = () => {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        onLocationSelect({ lat, lng, address: place.formatted_address });
      }
    };
  
    return (
      <>
        <Autocomplete
          onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter a location"
            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          />
        </Autocomplete>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 41.2995, lng: 69.2401 }}
          zoom={13}
        >
          {/* Add Marker if needed */}
        </GoogleMap>
      </>
    );
  };
  

export default MapComponent;
