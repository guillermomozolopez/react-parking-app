import { Parking } from '../../../../App';
import './styles.scss';

function ParkingCard({ parking }: { parking: Parking }) {
  return (
    <div className="parking-card">
      <div>{parking.title}</div>
      <div>
        <p>
          {parking.address['street-address']}, {parking.address['postal-code']},{' '}
        </p>
        <p>{parking.address.locality}</p>
        <p>{parking.distance}</p>
      </div>
    </div>
  );
}

export default ParkingCard;
