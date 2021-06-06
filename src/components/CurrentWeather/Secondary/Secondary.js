import "./Secondary.css";

const Secondary = (props) => {
  return (
    <div className="secondary-list">
      <div className="secondary-list-item">
        <h1>{props.high}</h1>
        <h3>High</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.wind}mps</h1>
        <h3>Wind</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.sunrise}</h1>
        <h3>Sunrise</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.low}</h1>
        <h3>Low</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.pressure}hPa</h1>
        <h3>Pressure</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.sunset}</h1>
        <h3>Sunset</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.coords.lat}</h1>
        <h3>Latitude</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.coords.lon}</h1>
        <h3>Longitude</h3>
      </div>
      <div className="secondary-list-item">
        <h1>{props.humidity}%</h1>
        <h3>Humidity</h3>
      </div>
    </div>
  );
};

export default Secondary;
