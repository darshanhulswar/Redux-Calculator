import React from "react";

function OperationInputButton(props) {
  return (
    <button
      className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none active:bg-yellow-600"
      onClick={props.clickHandler}
    >
      {props.operation}
    </button>
  );
}

export default OperationInputButton;
