import Search from '../components/Search.jsx';
import WeatherInfo from '../components/WeatherInfo';
import { UserContext } from '../contexts/weather';
import { useState, useEffect } from 'react';
import { getCityWeather } from '../utils/api';

const Home = () => {
  let defaultData = {
    location: 'Monterrey',
    icon: 'https://openweathermap.org/img/wn/04n@2x.png',
    temp: '10',
    feelsLike: '10'
  };
  const [weather, setWeather] = useState(defaultData);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCityWeather('Vancouver');
      setWeather(data);
    };
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={weather}>
      <div className="flex flex-col justify-center">
        <div className="loading-spinner-wrapper">
          <div className="loading-spinner">Loading...</div>
        </div>
        <div className="weather-app-wrapper">
          <WeatherInfo/>
          <Search />
        </div>
      </div>
    </UserContext.Provider>);
}

export default Home;

