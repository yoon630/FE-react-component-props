import "./Button.css";
import React from "react";

const Button = ({ text, style, onClick }) => {
  return (
    <button className="btn" style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
