import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';

function App() {

  let [message, setMessage] = React.useState("Hello, World!");
  let [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <Message message={message} />
      <button onClick={() => setMessage("Hello, React!")}>Change Message</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
