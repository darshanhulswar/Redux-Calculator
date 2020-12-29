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
          <button className="p-7 my-2 bg-white font-bold border-none focus:outline-none">
            7
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            8
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            9
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            +
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            4
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            5
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            6
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            -
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            1
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            2
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
            3
          </button>
          <button className="p-7 my-2 bg-yellow-500 font-bold focus:outline-none">
            *
          </button>
        </div>
        <div className="flex flex-row justify-evenly">
          <button className="p-7 my-2 bg-green-200 font-bold focus:outline-none">
            C
          </button>
          <button className="p-7 my-2 bg-white font-bold focus:outline-none">
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
