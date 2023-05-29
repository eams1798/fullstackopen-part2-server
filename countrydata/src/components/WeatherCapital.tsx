import axios from "axios";
import { useEffect, useState } from "react";
import { IWeather, voidWeather } from '../interfaces/Weather';

const WeatherCapital = ({nameCapital}: {nameCapital: string}) => {
  const [weatherData, setWeatherData] = useState<IWeather>(voidWeather);

  useEffect(() => {
      const accessKey = import.meta.env.VITE_API_KEY;
      /* const accessKey = process.env.VITE_API_KEY; not working yet */
      const capital = nameCapital.replace(',', '').replace('.', '');
      axios
        .get(`https://api.weatherstack.com/current?access_key=${accessKey}&query=${capital}`)
        .then(response => setWeatherData(response.data));
    }, []
  );

  return (
    <div>
      <h2>Weather in {nameCapital}</h2>
      <p><b>temperature:</b> {weatherData.current.temperature} Celsius</p>
      {weatherData.current.weather_icons.map((icon) => (
        <img key={icon} src={icon} />
      ))}
      <p><b>wind:</b> {weatherData.current.wind_speed} mph direction {weatherData.current.wind_dir}</p>
    </div>
  );
}

export default WeatherCapital;