import { Parking } from '../../../../App';
import { BiDirections, BiBuildings } from 'react-icons/bi';
import { GiPathDistance } from 'react-icons/gi';
import './styles.scss';
import FloatSpan from '../../atoms/FloatSpan/FloatSpan';
import ButtonPlaceParking from '../../atoms/ButtonPlaceParking/ButtonPlaceParking';

function ParkingCard({ parking }: { parking: Parking }) {
  return (
    <div className="parking-card">
      <h3>{parking.title}</h3>
      <div>
        <p>
          <BiDirections />
          <span>
            {parking.address['street-address']}, {parking.address['postal-code']}
          </span>
        </p>
        <p>
          <BiBuildings />
          <span>{parking.address.locality}</span>
        </p>
        <p>
          <GiPathDistance />
          <FloatSpan value={parking.distance} decimalScale={2} />
        </p>
        <p>
          <ButtonPlaceParking id={parking.id} />
        </p>
      </div>
    </div>
  );
}

export default ParkingCard;
