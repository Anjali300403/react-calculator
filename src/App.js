import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function performOperation(e, operation) {
    e.preventDefault();
    const num1 = Number(input1Ref.current.value);
    const num2 = Number(input2Ref.current.value);

    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        setResult(num1 / num2);
        break;
      default:
        break;
    }
  }

  function resetInput(e) {
    e.preventDefault();
    input1Ref.current.value = "";
    input2Ref.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <form>
        <div>
          <p ref={resultRef}>Result: {result}</p>
          <div className="num-container">
            <input pattern="[0-9]" ref={input1Ref} type="number" placeholder="Enter the first number" />
            <input pattern="[0-9]" ref={input2Ref} type="number" placeholder="Enter the second number" />
          </div>
          <div className="buttons-container">
            <button onClick={(e) => performOperation(e, "add")}>Add</button>
            <button onClick={(e) => performOperation(e, "subtract")}>Subtract</button>
            <button onClick={(e) => performOperation(e, "multiply")}>Multiply</button>
            <button onClick={(e) => performOperation(e, "divide")}>Divide</button>
            <button onClick={resetInput}>Reset Input</button>
            <button onClick={resetResult}>Reset Result</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
