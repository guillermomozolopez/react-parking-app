import { MapContainer, TileLayer } from 'react-leaflet';
import MapMarker from '../../UI/molecules/MapMarker/MapMarker';
import { Parking } from '../../../App';
import './styles.scss';

function ParkingMapTemplate({ parkings }: { parkings: Parking[] | [] }) {
  return (
    <MapContainer center={[40.4165, -3.70256]} zoom={12} scrollWheelZoom={false}>
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
