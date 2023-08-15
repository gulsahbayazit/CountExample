import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  function handlePlusS() {
    setStep((s) => s + 1);
  }
  function handleMinusS() {
    setStep((s) => s - 1);
  }

  function handlePlus() {
    setCount((c) => c + step);
  }
  function handleMinus() {
    setCount((c) => c - step);
  }

  return (
    <div>
      <div>
        <button onClick={handleMinusS}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlePlusS}>+</button>
      </div>
      <div>
        <button onClick={handleMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        {date.toDateString()}days from today is{" "}
      </p>
    </div>
  );
}
