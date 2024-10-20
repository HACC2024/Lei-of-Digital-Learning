import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [greet, setGreet] = useState("Vite + React");

  const fetchData = async () => {
    const res = await fetch("/api/");
    const res_json = await res.json();
    return res_json;
  };

  useEffect(() => {
    async function runEffect() {
      const json_res = await fetchData();
      console.log(json_res);
      const firstKey = Object.keys(json_res)[0];
      const newGreet = `${firstKey} ${json_res[firstKey]}`;
      setGreet(newGreet);
    }
    runEffect();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greet}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
