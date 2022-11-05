import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import CurrentWeather from '../../UI/molecules/CurrentWeather/CurrentWeather';
import {
  TiWeatherSunny,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherStormy
} from 'react-icons/ti';
import { TbCloudFog, TbCloudSnow, TbSnowflake, TbGrain } from 'react-icons/tb';
import { Geolocation } from '../../../App';
import WeatherSixDays from '../../UI/molecules/WeatherSixDays/WeatherSixDays';
import './styles.scss';

export interface Weather {
  precipitation_sum: number[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: string[];
  temperature_2m_min: string[];
  time: string[];
  weathercode: number[];
}

export interface ICurrentWeather {
  precipitation_sum: number;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  weathercode: number;
}

// WMO Weather interpretation codes (WW)
export const weatherCodes: any = {
  0: { name: 'Cielo despejado', icon: <TiWeatherSunny /> },
  1: { name: 'Parcialmente nublado', icon: <TiWeatherShower /> },
  2: { name: 'Parcialmente nublado', icon: <TiWeatherShower /> },
  3: { name: 'Parcialmente nublado', icon: <TiWeatherShower /> },
  45: { name: 'Niebla con escarcha', icon: <TbCloudFog /> },
  48: { name: 'Niebla con escarcha', icon: <TbCloudFog /> },
  51: { name: 'Llovizna', icon: <TiWeatherShower /> },
  53: { name: 'Llovizna', icon: <TiWeatherShower /> },
  55: { name: 'Llovizna', icon: <TiWeatherShower /> },
  61: { name: 'Lluvia', icon: <TiWeatherDownpour /> },
  63: { name: 'Lluvia', icon: <TiWeatherDownpour /> },
  65: { name: 'Lluvia', icon: <TiWeatherDownpour /> },
  66: { name: 'Agua nieve', icon: <TbCloudSnow /> },
  67: { name: 'Agua nieve', icon: <TbCloudSnow /> },
  71: { name: 'Nieva', icon: <TbSnowflake /> },
  73: { name: 'Nieva', icon: <TbSnowflake /> },
  75: { name: 'Nieva', icon: <TbSnowflake /> },
  77: { name: 'Granizo', icon: <TbGrain /> },
  80: { name: 'Aguacero', icon: <TiWeatherDownpour /> },
  81: { name: 'Aguacero', icon: <TiWeatherDownpour /> },
  82: { name: 'Aguacero', icon: <TiWeatherDownpour /> },
  85: { name: 'Nieve ligero', icon: <TbSnowflake /> },
  86: { name: 'Nieve ligero', icon: <TbSnowflake /> },
  95: { name: 'Tormenta', icon: <TiWeatherStormy /> },
  96: { name: 'Tormenta intensa', icon: <TiWeatherStormy /> },
  99: { name: 'Tormenta intensa', icon: <TiWeatherStormy /> }
};

function WeatherPage({ currentGeolocation }: { currentGeolocation: Geolocation | null }) {
  const [weather, setWeather] = useState<Weather | undefined>();
  const [city, setCity] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>({
    precipitation_sum: 0,
    sunrise: '',
    sunset: '',
    temperature_2m_max: '',
    temperature_2m_min: '',
    time: '',
    weathercode: 100
  });
  useEffect(() => {
    const dayStart = dayjs().format('YYYY-MM-DD');
    const dayEnd = dayjs().add(7, 'day').format('YYYY-MM-DD');
    if (currentGeolocation?.latitude && currentGeolocation?.longitude) {
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${currentGeolocation?.latitude},${currentGeolocation?.longitude}&key=0935f804669b4d229263f2a3d5aaf3e2&language=es&pretty=1`
        )
        .then((response: any) => {
          setCity(response.data.results[0].components.state_district);
        })
        .catch((error: any) => {
          console.log(error);
        });

      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${currentGeolocation?.latitude}&longitude=${currentGeolocation?.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Europe%2FBerlin&start_date=${dayStart}&end_date=${dayEnd}`
        )
        .then((response: { data: { daily: Weather } }) => {
          const apiResponse: Weather = response.data.daily;
          setWeather(() => ({
            precipitation_sum: apiResponse.precipitation_sum.slice(1),
            sunrise: apiResponse.sunrise.slice(1),
            sunset: apiResponse.sunset.slice(1),
            temperature_2m_max: apiResponse.temperature_2m_max.slice(1),
            temperature_2m_min: apiResponse.temperature_2m_min.slice(1),
            time: apiResponse.time.slice(1),
            weathercode: apiResponse.weathercode.slice(1)
          }));
          setCurrentWeather({
            precipitation_sum: apiResponse.precipitation_sum[0],
            sunrise: apiResponse.sunrise[0],
            sunset: apiResponse.sunset[0],
            temperature_2m_max: apiResponse.temperature_2m_max[0],
            temperature_2m_min: apiResponse.temperature_2m_min[0],
            time: apiResponse.time[0],
            weathercode: apiResponse.weathercode[0]
          });
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [currentGeolocation]);
  return (
    <div className="container-weather-template">
      <CurrentWeather currentWeather={currentWeather} city={city} />
      <WeatherSixDays weather={weather} />
    </div>
  );
}

export default WeatherPage;
