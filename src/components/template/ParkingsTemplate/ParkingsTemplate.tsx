import { useState, useEffect } from 'react';
import ParkingCard from '../../UI/organisms/ParkingCard/ParkingCard';
import API_GetParkings from '../../../service/API_GetParkings';
import { RingLoader } from 'react-spinners';
import './styles.scss';

export interface Parking {
  '@id': string;
  title: string;
  relation: string;
  address: Address;
  location: Location;
  organization: Organization;
}

interface Address {
  district: District;
  area: District;
  locality: string;
  'postal-code': string;
  'street-address': string;
}

interface District {
  '@id': string;
}

interface Organization {
  organizationDesc: string;
  accesibility: string;
  schedule: string;
  services: string;
  organizationName: string;
}

interface Location {
  latitude: number;
  longitude: number;
  // distancia entre el parking y mi ubicación actual
  distanceToGeolocation?: number;
}

function ParkingsTemplate() {
  const [parkings, setParkings] = useState<Parking[] | []>([]);

  useEffect(() => {
    API_GetParkings().then((data) => {
      setParkings(data['@graph']);
    });
  }, []);

  return (
    <div className="content">
      <RingLoader color="#36d7b7" loading={parkings.length === 0} />
      {parkings.map((parking, index) => (
        <ParkingCard key={index} parking={parking} />
      ))}
    </div>
  );
}

export default ParkingsTemplate;
