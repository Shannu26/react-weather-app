import "./ForecastWeather.css";

import ForecastWeatherHour from "./ForecastWeatherHour/ForecastWeatherHour";

const ForecastWeather = (props) => {
  return (
    <div className="forecast">
      <h1 className="title">Forecast</h1>
      <div className="forecast-weather">
        {props.forecast.map((hour, i) => {
          return (
            <ForecastWeatherHour
              key={hour.date.toISOString()}
              {...hour}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ForecastWeather;
