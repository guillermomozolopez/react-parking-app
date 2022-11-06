import ParkingCard from '../../UI/organisms/ParkingCard/ParkingCard';
import { RingLoader } from 'react-spinners';
import './styles.scss';
import { Parking } from '../../../App';
import { useState, useEffect } from 'react';
import ButtonSortBy from '../../UI/atoms/ButtonSortBy/ButtonSortBy';

function ParkingsTemplate({ parkings }: { parkings: Parking[] | [] }) {
  const [sortedParkings, setSortedParkings] = useState<Parking[] | []>(parkings);
  const [sortByDistance, setSortByDistance] = useState<boolean>(false);

  useEffect(() => {
    setSortedParkings(parkings);
  }, [parkings]);

  const handleClick = () => {
    console.log(sortByDistance);
    if (!sortByDistance) {
      console.log(sortedParkings.sort((p1: Parking, p2: Parking) => p2.distance - p1.distance));
      setSortedParkings(
        sortedParkings.sort((p1: Parking, p2: Parking) => p2.distance - p1.distance)
      );
    } else {
      setSortedParkings(
        sortedParkings.sort((p1: Parking, p2: Parking) => p1.title.localeCompare(p2.title))
      );
    }
    setSortByDistance(!sortByDistance);
  };

  return (
    <div>
      <ButtonSortBy handleClick={handleClick} sortByDistance={sortByDistance} />
      <div className="content">
        <RingLoader color="#36d7b7" loading={parkings.length === 0} />
        {sortedParkings.map((parking, index) => (
          <ParkingCard key={index} parking={parking} />
        ))}
      </div>
    </div>
  );
}

export default ParkingsTemplate;
