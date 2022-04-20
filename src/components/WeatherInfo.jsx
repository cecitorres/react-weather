import { WeatherContext } from '../contexts/weather';
import { useContext } from 'react';

const WeatherInfo = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="weather-info text-center">
      <div className="weather-location">{weather.location}</div>
      <div className="weather-icon-wrapper">
        <img className="weather-icon mx-auto" src={weather.icon} alt={weather.location} />
      </div>
      <div className="weather-temp">{weather.temp}&deg;</div>
      <div className="weather-feels-like">Feels like {weather.feelsLike}&deg;</div>
    </div>
  );
}

export default WeatherInfo;