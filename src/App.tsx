import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParkingMapTemplate from './components/template/ParkingMapTemplate';
import ParkingsTemplate from './components/template/ParkingsTemplate/ParkingsTemplate';
import WeatherTemplate from './components/template/WeatherTemplate';
import Header from './components/UI/organisms/Header/Header';
import Layout from './components/template/Layout';
import './styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Routes>
          <Route path="/weather" element={<WeatherTemplate />} />
          <Route path="/parking" element={<ParkingsTemplate />} />
          <Route path="/parkingsmap" element={<ParkingMapTemplate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
