import { Marker, Popup } from 'react-leaflet';
import { iconParking } from '../../atoms/IconParking/IconParking';
import { Parking } from '../../../../App';

function MapMarker({ parking }: { parking: Parking }) {
  return (
    <Marker position={[parking.location.latitude, parking.location.longitude]} icon={iconParking}>
      <Popup>
        <div>
          <h4>{parking.title}</h4>
          <p>{parking.address['street-address']}</p>
          <p>{parking.organization['organization-desc']}</p>
        </div>
      </Popup>
    </Marker>
  );
}

export default MapMarker;
