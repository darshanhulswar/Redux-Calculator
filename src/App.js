function App() {
  return (
    <div>
      <div
        className="calculator-wrapper bg-black mx-auto my-8 shadow-md"
        style={{ width: "300px", height: "470px" }}
      >
        <div className="py-6 px-3 font-bold text-2xl text-right bg-gray-200">
          Screen
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-white font-bold">7</button>
          <button className="p-7 my-2 bg-white font-bold">8</button>
          <button className="p-7 my-2 bg-white font-bold">9</button>
          <button className="p-7 my-2 bg-yellow-500 font-bold">+</button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-white font-bold">4</button>
          <button className="p-7 my-2 bg-white font-bold">5</button>
          <button className="p-7 my-2 bg-white font-bold">6</button>
          <button className="p-7 my-2 bg-yellow-500 font-bold">-</button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-white font-bold">1</button>
          <button className="p-7 my-2 bg-white font-bold">2</button>
          <button className="p-7 my-2 bg-white font-bold">3</button>
          <button className="p-7 my-2 bg-yellow-500 font-bold">*</button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-green-200 font-bold">C</button>
          <button className="p-7 my-2 bg-white font-bold">0</button>
          <button className="p-7 my-2 bg-yellow-500 font-bold">=</button>
          <button className="p-7 my-2 bg-yellow-500 font-bold">/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
