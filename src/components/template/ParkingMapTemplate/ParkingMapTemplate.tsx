import { Geolocation } from '../../../App';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles.scss';
import { useState, useEffect } from 'react';
import { Parking } from '../ParkingsTemplate/ParkingsTemplate';
import API_GetParkings from '../../../service/API_GetParkings';
import useParkings from '../../../hooks/useParkings';
import './styles.scss';
import { iconParking } from '../../UI/atoms/IconParking/IconParking';

function ParkingMapTemplate() {
  const parkings = useParkings();

  return (
    <MapContainer center={[40.4165, -3.70256]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parkings.map((parking, index) => (
        <Marker
          key={index}
          position={[parking.location.latitude, parking.location.longitude]}
          icon={iconParking}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ParkingMapTemplate;
