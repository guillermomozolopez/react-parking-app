import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import CurrentWeather from '../UI/molecules/CurrentWeather/CurrentWeather';
import {
  TiWeatherSunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherWindyCloudy,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherStormy
} from 'react-icons/ti';
import { TbCloudFog, TbCloudSnow, TbSnowflake, TbGrain } from 'react-icons/tb';

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

function WeatherPage() {
  const [weather, setWeather] = useState<Weather>();
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>({
    precipitation_sum: 0,
    sunrise: '',
    sunset: '',
    temperature_2m_max: '',
    temperature_2m_min: '',
    time: '',
    weathercode: 0
  });
  useEffect(() => {
    const dayStart = dayjs().format('YYYY-MM-DD');
    const dayEnd = dayjs().add(7, 'day').format('YYYY-MM-DD');
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=40.4167&longitude=-3.7033&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&timezone=Europe%2FBerlin&start_date=${dayStart}&end_date=${dayEnd}`
      )
      .then((response: { data: { daily: Weather } }) => {
        const apiResponse = response.data.daily;
        setWeather(apiResponse);
        setCurrentWeather({
          precipitation_sum: apiResponse.precipitation_sum[0],
          sunrise: apiResponse.sunrise[0],
          sunset: apiResponse.sunset[0],
          temperature_2m_max: apiResponse.temperature_2m_max[0],
          temperature_2m_min: apiResponse.temperature_2m_min[0],
          time: apiResponse.time[0],
          weathercode: apiResponse.weathercode[0]
        });

        console.log({
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
  }, []);
  return (
    <div>
      <CurrentWeather currentWeather={currentWeather} />
    </div>
  );
}

export default WeatherPage;
