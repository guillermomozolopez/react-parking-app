import { useState, useEffect } from 'react';
import { Parking } from '../components/template/ParkingsTemplate/ParkingsTemplate';
import API_GetParkings from '../service/API_GetParkings';

function useParkings(): Parking[] {
  const [parkings, setParkings] = useState<Parking[] | []>([]);

  useEffect(() => {
    API_GetParkings().then((data) => {
      setParkings(data['@graph']);
    });
  }, []);

  return parkings;
}

export default useParkings;
