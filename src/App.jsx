import React, { useState } from "react";

const App = () => {
   let [count, setCount] = useState(0);
  function handleplus() {
    setCount(count++);
  }
  function handleminus() {
    if(count >= 0){
       setCount(count--);
    }
   
  }
  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={handleplus}>+</button>
      <button onClick={handleminus}>-</button>
    </div>
  );
  }

export default App