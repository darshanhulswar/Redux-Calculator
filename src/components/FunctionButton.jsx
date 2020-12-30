import React from "react";

function FunctionButton(props) {
  return (
    <button
      className="p-2 my-2 bg-yellow-300 font-bold border-none focus:outline-none active:bg-yellow-400"
      onClick={props.clickHandler}
    >
      {props.functionSignature}
    </button>
  );
}

export default FunctionButton;
