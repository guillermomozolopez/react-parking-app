import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParkingMapTemplate from './components/template/ParkingMapTemplate/ParkingMapTemplate';
import ParkingsTemplate from './components/template/ParkingsTemplate/ParkingsTemplate';
import WeatherTemplate from './components/template/WeatherTemplate/WeatherTemplate';
import Header from './components/UI/organisms/Header/Header';
import Layout from './components/template/Layout';
import './styles/App.scss';
import { useState, useEffect } from 'react';
import useParkings from './hooks/useParkings';

export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface Parking {
  '@id': string;
  id: string;
  title: string;
  relation: string;
  address: Address;
  location: Location;
  organization: Organization;
  distance: number;
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
  'organization-desc': string;
  accesibility: string;
  schedule: string;
  services: string;
  'organization-name': string;
}

interface Location {
  latitude: number;
  longitude: number;
  // distancia entre el parking y mi ubicación actual
  distanceToGeolocation?: number;
}

function App() {
  const [currentGeolocation, setCurrentGeolocation] = useState<Geolocation | null>(null);
  const parkings: Parking[] = useParkings({ currentGeolocation });

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentGeolocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    }
  }, [navigator]);

  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route
            path="/weather"
            element={<WeatherTemplate currentGeolocation={currentGeolocation} />}
          />
          <Route path="/parking" element={<ParkingsTemplate parkings={parkings} />} />
          <Route path="/parkings-map" element={<ParkingMapTemplate parkings={parkings} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
