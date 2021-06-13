import "./Input.css";
import "font-awesome/css/font-awesome.min.css";

const Input = (props) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="input-div"
      data-netlify="true"
      onSubmit={formSubmitHandler}
      style={{ opacity: "80%" }}
    >
      <i className="fa fa-search" style={{ opacity: "50%" }}></i>
      <input
        type="text"
        name="city-name"
        className="input"
        placeholder="Enter City"
        onKeyPress={props.onKeypress}
        value={props.value}
        onChange={props.onChange}
      />
    </form>
  );
};

export default Input;
