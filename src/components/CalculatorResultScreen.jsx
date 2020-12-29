import React from "react";

function CalculatorResultScreen(props) {
  return (
    <div
      style={{ minHeight: "80px" }}
      className="py-6 px-3 font-bold text-2xl text-right bg-gray-200 overflow-x-auto"
    >
      {props.result}
    </div>
  );
}

export default CalculatorResultScreen;
