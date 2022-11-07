import { MapContainer, TileLayer } from 'react-leaflet';
import MapMarker from '../../UI/molecules/MapMarker/MapMarker';
import { Parking } from '../../../App';
import './styles.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function ParkingMapTemplate({ parkings }: { parkings: Parking[] | [] }) {
  const [zoom, setZoom] = useState<number>(12);
  const [parkingSelected, setParkingSelected] = useState<Parking>();
  const [searchParams] = useSearchParams();
  const [remountKey, setRemountKey] = useState<number>(Math.random);

  useEffect(() => {
    if (parkings.length > 0) {
      const queryId = searchParams.get('id');
      const match = parkings.find((parking) => parking.id === queryId);
      if (match?.id) {
        setParkingSelected(match);
        setZoom(17);
        setRemountKey(Math.random);
      }
    }
  }, [parkings]);

  return (
    <MapContainer
      key={remountKey}
      center={[
        parkingSelected?.location.latitude || 40.4165,
        parkingSelected?.location.longitude || -3.70256
      ]}
      zoom={zoom}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parkings.map((parking, index) => (
        <MapMarker parking={parking} key={index} />
      ))}
    </MapContainer>
  );
}

export default ParkingMapTemplate;
