import "./ForecastWeatherHour.css";

const ForecastWeatherHour = (props) => {
  const date = `${
    props.date.getDate().toString().length === 1
      ? "0" + props.date.getDate()
      : props.date.getDate()
  }.${
    props.date.getMonth().toString().length === 1
      ? "0" + props.date.getMonth()
      : props.date.getMonth()
  }`;
  return (
    <div className="forecast-weather-hour">
      <h2 className="date">{date}</h2>
      <h2 className="month">{`${props.date.getHours()}:${props.date.getMinutes()}`}</h2>
      <img src={props.icon} alt="" className="icon" />
      <h1 className="temp">{`${props.temp}\u00B0`}</h1>
    </div>
  );
};

export default ForecastWeatherHour;
