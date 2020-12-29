import React from "react";

function PreviousCalculation(props) {
  return (
    <div className="bg-gray-400 p-2 text-gray-50 font-bold rounded-md shadow-md my-2">
      {props.calculation}
    </div>
  );
}

export default PreviousCalculation;
