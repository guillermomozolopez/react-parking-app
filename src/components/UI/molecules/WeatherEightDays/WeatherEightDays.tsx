import { ICurrentWeather, Weather } from '../../../template/WeatherTemplate';
import dayjs from 'dayjs';
import './styles.scss';

const daysWeek: any = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado'
};

function WeatherEightDays({ weather }: { weather: Weather | undefined }) {
  if (!weather?.precipitation_sum) {
    return <div></div>;
  }
  return (
    <>
      <div>
        <h1>Tiempo en 7 días</h1>
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
              <div>{daysWeek[dayWeek]}</div>
              <div>{weatherDay.precipitation_sum}</div>
              <div>{weatherDay.sunrise}</div>
              <div>{weatherDay.sunset}</div>
              <div>{weatherDay.temperature_2m_min}</div>
              <div>{weatherDay.temperature_2m_max}</div>
              <div>{weatherDay.weathercode}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WeatherEightDays;
