import ParkingCard from '../../UI/organisms/ParkingCard/ParkingCard';
import { RingLoader } from 'react-spinners';
import './styles.scss';
import { Parking } from '../../../App';
import { useState, useEffect } from 'react';
import ButtonSortBy from '../../UI/atoms/ButtonSortBy/ButtonSortBy';

function ParkingsTemplate({ parkings }: { parkings: Parking[] | [] }) {
  const [sortedParkings, setSortedParkings] = useState<Parking[] | []>(parkings);
  useEffect(() => {
    setSortedParkings(parkings);
  }, [parkings]);

  useEffect(() => {
    console.log(sortedParkings[0]);
  }, [sortedParkings]);

  return (
    <div>
      <ButtonSortBy sortedParkings={sortedParkings} setSortedParkings={setSortedParkings} />
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
