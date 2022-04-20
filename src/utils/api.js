// Load weather info from Open Weather Map
export const getCityWeather = async (cityName) => {
  const apiKey = '382f59524073c13ea2c6dfb8347a2258';
  const unit = 'metric';
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`)
  let data = await response.json();

  const formatData = (data) => {
    return {
      location: data.name,
      temp: roundTemp(data.main.temp),
      feelsLike: roundTemp(data.main.feels_like),
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    }
  }
  return formatData(data);
};

// Util function for rounding temperature
export const roundTemp = (temp) => {
  return Math.round(temp);
};
