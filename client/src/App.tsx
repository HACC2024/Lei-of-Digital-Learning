import { useState, useEffect } from "react";
import "./App.css";

import Login from "./components/Login.tsx";

function App() {
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
      <div className="main-content">
        <Login />
        <h1>{greet}</h1>
      </div>
    </>
  );
}

export default App;
