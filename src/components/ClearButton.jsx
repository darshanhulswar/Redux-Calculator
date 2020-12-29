import React from "react";

function ClearButton(props) {
  return (
    <button
      className="p-7 my-2 bg-green-200 font-bold focus:outline-none"
      onClick={props.clickHandler}
    >
      C
    </button>
  );
}

export default ClearButton;
