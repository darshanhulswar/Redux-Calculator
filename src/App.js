import React, { useState } from "react";
import NumInputButton from "./components/NumInputButton";
import OperationInputButton from "./components/OperationInputButton";
import ClearButton from "./components/ClearButton";
import CalculatorScreen from "./components/CalculatorScreen";

function App() {
  const [input, setInput] = useState("");

  function setInputHandler(e) {
    if (e.target.innerText === "0") {
      if (input !== "") {
        setInput(`${input}${e.target.innerText}`);
      } else return;
    }
    setInput(`${input}${e.target.innerText}`);
  }

  function clearInputHandler() {
    setInput("");
  }

  return (
    <React.Fragment>
      <div
        className="calculator-wrapper bg-black mx-auto my-8 shadow-md"
        style={{ width: "300px", height: "470px" }}
      >
        <CalculatorScreen input={input} />
        <div className="flex flex-row justify-evenly">
          <NumInputButton num={7} clickHandler={setInputHandler} />
          <NumInputButton num={8} clickHandler={setInputHandler} />
          <NumInputButton num={9} clickHandler={setInputHandler} />
          <OperationInputButton operation="+" />
        </div>
        <div className="flex flex-row justify-evenly">
          <NumInputButton num={4} clickHandler={setInputHandler} />
          <NumInputButton num={5} clickHandler={setInputHandler} />
          <NumInputButton num={6} clickHandler={setInputHandler} />
          <OperationInputButton operation="-" />
        </div>
        <div className="flex flex-row justify-evenly">
          <NumInputButton num={1} clickHandler={setInputHandler} />
          <NumInputButton num={2} clickHandler={setInputHandler} />
          <NumInputButton num={3} clickHandler={setInputHandler} />
          <OperationInputButton operation="*" />
        </div>
        <div className="flex flex-row justify-evenly">
          <ClearButton clickHandler={clearInputHandler} />
          <NumInputButton num={0} clickHandler={setInputHandler} />
          <OperationInputButton operation="=" />
          <OperationInputButton operation="/" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
