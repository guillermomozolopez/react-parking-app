import { Parking } from '../../../../App';
import './styles.scss';

function ParkingCard({ parking }: { parking: Parking }) {
  return (
    <div className="parking-card">
      <div>{parking.title}</div>
      <div>
        {parking.address['street-address']}, {parking.address['postal-code']},{' '}
        {parking.address.locality}
      </div>
    </div>
  );
}

export default ParkingCard;
