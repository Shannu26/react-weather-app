import "./Input.css";
import "font-awesome/css/font-awesome.min.css";

const Input = (props) => {
  return (
    <div>
      <i className="fa fa-search"></i>
      <input
        type="text"
        className="input"
        placeholder="Enter City"
        onKeyPress={props.onKeypress}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
