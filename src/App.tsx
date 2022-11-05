import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParkingMapTemplate from './components/template/ParkingMapTemplate/ParkingMapTemplate';
import ParkingsTemplate from './components/template/ParkingsTemplate/ParkingsTemplate';
import WeatherTemplate from './components/template/WeatherTemplate/WeatherTemplate';
import Header from './components/UI/organisms/Header/Header';
import Layout from './components/template/Layout';
import './styles/App.scss';
import { useState, useEffect } from 'react';

export interface Geolocation {
  latitude: number;
  longitude: number;
}

function App() {
  const [currentGeolocation, setCurrentGeolocation] = useState<Geolocation | null>(null);

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
          <Route path="/parking" element={<ParkingsTemplate />} />
          <Route path="/parkings-map" element={<ParkingMapTemplate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
