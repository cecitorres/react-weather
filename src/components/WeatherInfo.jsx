import { UserContext } from '../contexts/weather';
import { useContext } from 'react';

const WeatherInfo = () => {
  const weatherData = useContext(UserContext);
  return (
    <div className="weather-info">
      <div className="weather-location">{weatherData.location}</div>
      <div className="weather-icon-wrapper">
        <img className="weather-icon" src={weatherData.icon} alt={weatherData.location} />
      </div>
      <div className="weather-temp">{weatherData.temp}</div>
      <div className="weather-feels-like">{weatherData.feelsLike}</div>
    </div>
  );
}

export default WeatherInfo;