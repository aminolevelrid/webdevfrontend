import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [movie, setMovie] = useState("");
  const [store, setStore] = useState([]);

  function change(e) {
    setMovie(e.target.value); 
    console.log(movie); 
  }

  async function hell() {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${movie}`);
    const data = await response.json();
    setStore(data); 
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input type="text" onChange={change} />
        <button onClick={hell}>Submit</button> 
      </div>
      <div>
        {store.length > 0 ? (
          <ul>
            {store.map((item, index) => (
              <li key={index}>{item.show.name}</li> 
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
}

export default App;
