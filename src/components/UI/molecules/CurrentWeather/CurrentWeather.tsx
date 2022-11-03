import { ICurrentWeather, weatherCodes } from '../../../template/WeatherTemplate';
import { TbTemperatureMinus, TbTemperaturePlus, TbSunset, TbSunrise } from 'react-icons/tb';
import dayjs from 'dayjs';
import { RingLoader } from 'react-spinners';
import './styles.scss';

function CurrentWeather({ currentWeather }: { currentWeather: ICurrentWeather }) {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <RingLoader color="#36d7b7" loading={currentWeather.precipitation_sum === 0} />
      </div>
      {currentWeather.precipitation_sum !== 0 && (
        <div className="current-weather-container">
          <h1>Tiempo Actual en Madrid</h1>
          <div className="current-weather">
            <div className="current-weather-grid">
              <div>{weatherCodes[currentWeather.weathercode].icon}</div>
              <div>
                <TbTemperatureMinus />
              </div>
              <div>
                <TbTemperaturePlus />
              </div>
              <div>
                <TbSunrise />
              </div>
              <div>
                <TbSunset />
              </div>
              <div>{weatherCodes[currentWeather.weathercode].name}</div>
              <div>{currentWeather.temperature_2m_min}</div>
              <div>{currentWeather.temperature_2m_max}</div>
              <div>{dayjs(currentWeather.sunrise).format('HH:MM')}</div>
              <div>{dayjs(currentWeather.sunset).format('HH:MM')}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CurrentWeather;
