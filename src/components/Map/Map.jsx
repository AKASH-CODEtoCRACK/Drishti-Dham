// src/components/Map.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
// import { temples } from '../data/temples';
import { Jyotirlingas, charDham } from '../../data/temples';
// Fix for Leaflet's default icon issue in React
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});


  
  


const Map = () => {
  const navigate = useNavigate();

  const handleMarkerClick = (index) => {
    navigate(`/temple/${index}`);
  };
  const allTemples = [...charDham, ...Jyotirlingas];
  return (
    <div className="w-full h-[600px] bg-white dark:bg-[#3e3e3e] rounded-lg shadow-lg p-4">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {allTemples.map((temple, index) => (
          <Marker 
            key={index} 
            position={[temple.coordinates.lat, temple.coordinates.lng]}
            eventHandlers={{ click: () => handleMarkerClick(index) }}
          >
            <Popup>
              <strong>{temple.name}</strong><br />
              {temple.location}<br />
              Opening: {temple.openingTiming}<br />
              Closing: {temple.closingTiming}<br />
              Important Dates: {temple.importantDates.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
