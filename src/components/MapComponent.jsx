import React from 'react';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ latitude = 26.912434, longitude = 75.787270 }) => {
  console.log(latitude, longitude);
  
  return (
    <div className="map-wrapper" style={{ height: '100%', width: '100%' }}>
      <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup>Sample location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
