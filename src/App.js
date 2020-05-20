import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    if (e.target.id === "incr") {
      setCount(count + 1);
    } else if (e.target.id === "decr") {
      setCount(count - 1);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          Le compteur est à : <br />
          {count}
        </h1>
        <br />
        <div className='buttons'>
          <button
            id='incr'
            onClick={(e) => {
              handleCount(e);
            }}>
            + Increment
          </button>
          <button
            id='decr'
            onClick={(e) => {
              handleCount(e);
            }}>
            - Decrement
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
