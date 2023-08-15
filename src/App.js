import React, { useState } from 'react';
import './App.css';

function App() {
  // Declare a new state variable named 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Functions to add, reduce and reset the counter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Counter Application</h1>
      <div>
        <button onClick={increment}>+</button>
        <span style={{ margin: '0 10px' }}>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
