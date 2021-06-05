import "./App.css";
import Input from "./components/Input/Input";
import axios from "axios";

import { useState } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const current_weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = {
        temp: Math.round(current_weather.data.main.temp - 273.15),
        high: Math.round(current_weather.data.main.temp_max - 273.15),
        low: Math.round(current_weather.data.main.temp_min - 273.15),
        date: new Date(current_weather.data.dt * 1000),
        sunrise: new Date(current_weather.data.sys.sunrise * 1000),
        sunset: new Date(current_weather.data.sys.sunset * 1000),
        description: current_weather.data.weather[0].description,
        wind: current_weather.data.wind.speed,
        name:
          current_weather.data.name + ", " + current_weather.data.sys.country,
        coordinates: {
          lat: current_weather.data.coord.lat,
          lon: current_weather.data.coord.lon,
        },
        humidity: current_weather.data.main.humidity,
        pressure: current_weather.data.main.pressure,
        icon: `http://openweathermap.org/img/wn/${current_weather.data.weather[0].icon}@2x.png`,
      };

      const forecast_weather = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coordinates.lat}&lon=${data.coordinates.lon}&exclude=current,daily,minutely,daily&appid=${API_KEY}`
      );

      data.timezone = forecast_weather.data.timezone;
      data.hourly_forecast = forecast_weather.data.hourly.map((hour) => {
        return {
          date: new Date(hour.dt * 1000),
          icon: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
          temp: Math.round(hour.temp - 273.15),
        };
      });

      setWeatherData(data);

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const keyPressHandler = (e) => {
    if (e.which === 13) {
      console.log(city);
      getWeather();
      setCity("");
    }
  };

  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Input
        onKeypress={keyPressHandler}
        onChange={changeHandler}
        value={city}
      />
    </div>
  );
}

export default App;