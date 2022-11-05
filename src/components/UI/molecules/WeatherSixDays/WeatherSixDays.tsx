import {
  ICurrentWeather,
  Weather,
  weatherCodes
} from '../../../template/WeatherTemplate/WeatherTemplate';
import { WiDayRain } from 'react-icons/wi';
import dayjs from 'dayjs';
import './styles.scss';
import { TiWeatherDownpour } from 'react-icons/ti';
import { TbSunrise, TbSunset, TbTemperaturePlus, TbTemperatureMinus } from 'react-icons/tb';

const daysWeek: any = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
};

function WeatherSixDays({ weather }: { weather: Weather | undefined }) {
  if (!weather?.precipitation_sum) {
    return <div></div>;
  }
  return (
    <>
      <div>
        <h1>Tiempo en 7 días</h1>
      </div>
      <div className="row-weather-day headers" style={{ fontSize: '30px' }}>
        <span />
        <span>
          <WiDayRain />
        </span>
        <span>
          <TiWeatherDownpour />
        </span>
        <span>
          <TbTemperatureMinus />
        </span>
        <span>
          <TbTemperaturePlus />
        </span>
        <span>
          <TbSunrise />
        </span>
        <span>
          <TbSunset />
        </span>
      </div>
      <div>
        {[1, 2, 3, 4, 5, 6].map((day) => {
          const dayWeek: number = dayjs().add(day, 'day').day();
          // compruebo que no sea nulo previamente
          const weatherDay: ICurrentWeather = {
            precipitation_sum: weather!.precipitation_sum[day],
            sunrise: weather!.sunrise[day],
            sunset: weather!.sunset[day],
            temperature_2m_max: weather!.temperature_2m_max[day],
            temperature_2m_min: weather!.temperature_2m_min[day],
            time: weather!.time[day],
            weathercode: weather!.weathercode[day]
          };
          return (
            <div className="row-weather-day" key={day}>
              <span>{daysWeek[dayWeek]}</span>
              <span>
                {weatherCodes[weatherDay.weathercode]?.icon}{' '}
                {weatherCodes[weatherDay.weathercode]?.name}
              </span>
              <span>{weatherDay.precipitation_sum || 0}</span>
              <span>{weatherDay.temperature_2m_min}</span>
              <span>{weatherDay.temperature_2m_max}</span>
              <span>{dayjs(weatherDay.sunrise).format('HH:mm')}</span>
              <span>{dayjs(weatherDay.sunset).format('HH:mm')}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WeatherSixDays;
