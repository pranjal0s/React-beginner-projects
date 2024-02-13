import "./App.css";
import React, { useState } from 'react';


function App() {
  // let count= 0
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
    console.log("plus")
  }

  function increaseHandler() {
    setCount(count + 1);
    console.log("minus")
  }

  function resetHandler() {
    setCount(0);
    console.log("reset")
  }

  return (
    <div >
      <div >Counter App</div>
      <div >
        <button onClick={decreaseHandler}>-</button>
        <div>
          {count}
        </div>
        <button onClick={increaseHandler}>+</button>
      </div>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;
