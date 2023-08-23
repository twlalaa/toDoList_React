// import "./button.css";

// const Button = (props) => {
//   return <button className="btn">{props.children}</button>;
// };

// export default Button;

import "./button.css";

const Button = (props) => {
  return (
    <button onClick={props.click} className="btn">
      {props.children}
    </button>
  );
};

export default Button;
