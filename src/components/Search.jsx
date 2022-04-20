import { useContext, useState } from "react";
import { WeatherContext } from "../contexts/weather";
import { getCityWeather } from '../api/getCityWeather';

const Search = () => {
  const [cityName, setCityName] = useState("");

  const { setWeather, setLoading } = useContext(WeatherContext);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getCityWeather(cityName);
      setWeather(data);
    } catch (error) {
      // Shows popup if city name is invalid
      alert('City not found');
    } finally {
      setCityName('');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityName) {
      fetchData();
    }
  };

  return (<div className="weather-search">
    <form onSubmit={handleSubmit} className="weather-search-form">
      <div className="my-4">
        <input
          value={cityName}
          onChange={handleChange}
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Search for your city" />
      </div>
      <div className="weather-search-body-button flex flex-col justify-center">
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
    </form>
  </div>);
}

export default Search;