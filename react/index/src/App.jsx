import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [joke, setJoke] = useState("");

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  async function jokegenerator() {
    try{const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setJoke(joke + "\n"+data.fact);
    }
    catch(error){
      console.log(error);
    } 
  }

  return (
    <>
      <h1 className="p">This is my first project</h1>
      <button onClick={decrement}>Decrement</button>
      <span>{count}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={jokegenerator}>Joke Generator</button>
      <p style={{ color: "blue", fontSize: "20px" }}>{joke}</p>
    </>
  );
}

export default App;
