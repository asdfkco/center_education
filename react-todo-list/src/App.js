import "./App.css";
import { useState, useEffect } from "react";
import Test from "./Test";

function App() {
  // useEffect(() => {
  //   setCount(10);
  // }, []);

  const [text, setText] = useState("");
  const [textArr, setTextArr] = useState([]);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTextArr([...textArr, text]);
        }}
      >
        추가
      </button>
      {textArr.map((one) => (
        <div>{one}</div>
      ))}
    </div>
  );
}

export default App;
