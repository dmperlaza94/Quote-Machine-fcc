import React from "react";

const Button = ({ buttonDisplayName, onClick }) => {
  return (
    <button className="boton" onClick={onClick}>
      {buttonDisplayName}{" "}
    </button>
  );
};
export default Button;
