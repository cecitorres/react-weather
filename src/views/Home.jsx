import { WeatherContext } from '../contexts/weather';
import { useState, useEffect } from 'react';
import { getCityWeather } from '../api/getCityWeather';
import Search from '../components/Search.jsx';
import WeatherInfo from '../components/WeatherInfo';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCityWeather('Vancouver');
      setWeather(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, setWeather, setLoading }}>
      <div className="flex flex-col justify-center">
        {loading ? (
          <div className="loading-spinner-wrapper">
            <div className="loading-spinner">Loading...</div>
          </div>
        ) : (
          <div className="weather-app-wrapper">
            <WeatherInfo />
            <Search />
          </div>
        )}
      </div>
    </WeatherContext.Provider>);
}

export default Home;

