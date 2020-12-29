import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div
        className="calculator-wrapper bg-black mx-auto my-8 shadow-md"
        style={{ width: "300px", height: "470px" }}
      >
        <div
          style={{ minHeight: "80px" }}
          className="py-6 px-3 font-bold text-2xl text-right bg-gray-200 overflow-x-auto"
        >
          {input}
        </div>
        <div className="flex flex-row justify-evenly">
          <button
            className="p-7 my-2 bg-white font-bold border-none focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            7
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            8
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            9
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            +
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            4
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            5
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            6
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            -
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            1
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            2
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => setInput(`${input}${e.target.innerText}`)}
          >
            3
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            *
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button
            className="p-7 my-2 bg-green-200 font-bold focus:outline-none"
            onClick={() => setInput("")}
          >
            C
          </button>
          <button
            className="p-7 my-2 bg-white font-bold focus:outline-none"
            onClick={(e) => {
              if (input !== "") {
                setInput(`${input}${e.target.innerText}`);
              }
            }}
          >
            0
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            =
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
