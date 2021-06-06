import "./CurrentWeather.css";

import Secondary from "./Secondary/Secondary";

const CurrentWeather = (props) => {
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="current-weather-div">
      <div className="main">
        <div className="place_time">
          <h1 className="place">{props.weatherData.name}</h1>
          <h2 className="time">{`${
            day[props.weatherData.date.getDay()]
          } ${props.weatherData.date.getDate()} ${
            month[props.weatherData.date.getMonth()]
          }`}</h2>
        </div>
        <div className="weather">
          <img src={props.weatherData.icon} alt="" className="icon" />
          <h1 className="temp">{`${props.weatherData.temp}\u00B0`}</h1>
          <h2 className="desc">{props.weatherData.description}</h2>
        </div>
      </div>
      <div className="secondary">
        <Secondary
          high={`${props.weatherData.high}\u00B0`}
          low={`${props.weatherData.low}\u00B0`}
          wind={props.weatherData.wind}
          sunrise={`${props.weatherData.sunrise.getHours()}:${props.weatherData.sunrise.getMinutes()}`}
          sunset={`${props.weatherData.sunset.getHours()}:${props.weatherData.sunset.getMinutes()}`}
          pressure={props.weatherData.pressure}
          coords={props.weatherData.coordinates}
          humidity={props.weatherData.humidity}
        />
      </div>
    </div>
  );
};

export default CurrentWeather;
