import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalculatorScreen from "./components/CalculatorScreen";
import CalculatorResultScreen from "./components/CalculatorResultScreen";
import NumInputButton from "./components/NumInputButton";
import OperationInputButton from "./components/OperationInputButton";
import PreviousCalculation from "./components/PreviousCalculation";
import ClearButton from "./components/ClearButton";
import { setInputs, clearInputs, evaluate } from "./actions";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { result, calculationHistory } = useSelector((state) => state);

  function setInputHandler(e) {
    if (e.target.innerText === "0") {
      if (input !== "") {
        setInput(`${input}${e.target.innerText}`);
      } else return;
    }
    setInput(`${input}${e.target.innerText}`);
  }

  function setOperationInputHandler(e) {
    const operation = e.target.innerText;
    const num = Number(input);
    dispatch(setInputs({ num, operation }));
    setInput("");
  }

  function clearInputHandler() {
    setInput("");
    dispatch(clearInputs());
  }

  function evaluateHandler() {
    const num = Number(input);
    const operation = "=";
    dispatch(setInputs({ num, operation }));
    dispatch(evaluate());
    setInput("");
  }

  return (
    <React.Fragment>
      <div
        className="calculator-wrapper bg-black mx-auto my-8 shadow-md"
        style={{ width: "300px", height: "550px" }}
      >
        <div className="border-2 border-black">
          <CalculatorScreen input={input} />
          <CalculatorResultScreen result={result} />
        </div>
        <div className="flex flex-row justify-evenly">
          <NumInputButton num={7} clickHandler={setInputHandler} />
          <NumInputButton num={8} clickHandler={setInputHandler} />
          <NumInputButton num={9} clickHandler={setInputHandler} />
          <OperationInputButton
            operation="+"
            clickHandler={setOperationInputHandler}
          />
        </div>
        <div className="flex flex-row justify-evenly">
          <NumInputButton num={4} clickHandler={setInputHandler} />
          <NumInputButton num={5} clickHandler={setInputHandler} />
          <NumInputButton num={6} clickHandler={setInputHandler} />
          <OperationInputButton
            operation="-"
            clickHandler={setOperationInputHandler}
          />
        </div>
        <div className="flex flex-row justify-evenly">
          <NumInputButton num={1} clickHandler={setInputHandler} />
          <NumInputButton num={2} clickHandler={setInputHandler} />
          <NumInputButton num={3} clickHandler={setInputHandler} />
          <OperationInputButton
            operation="*"
            clickHandler={setOperationInputHandler}
          />
        </div>
        <div className="flex flex-row justify-evenly">
          <ClearButton clickHandler={clearInputHandler} />
          <NumInputButton num={0} clickHandler={setInputHandler} />
          <OperationInputButton operation="=" clickHandler={evaluateHandler} />
          <OperationInputButton
            operation="/"
            clickHandler={setOperationInputHandler}
          />
        </div>
      </div>

      <div style={{ width: "300px" }} className="mx-auto">
        {calculationHistory.map((singleHistory, i) => {
          return <PreviousCalculation calculation={singleHistory} key={i} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
