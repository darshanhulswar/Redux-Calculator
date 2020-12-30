import React from "react";

function NumInputButton(props) {
  return (
    <button
      className="p-7 my-2 bg-white font-bold border-none focus:outline-none active:bg-gray-200"
      onClick={props.clickHandler}
    >
      {props.num}
    </button>
  );
}

export default NumInputButton;
