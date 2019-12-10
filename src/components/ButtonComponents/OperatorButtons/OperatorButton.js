import React from "react";

const OperatorButton = (props) => {
  return (
    <button className="btn-operator">
      {props.operators.value}
    </button>
  );
};
export default OperatorButton;