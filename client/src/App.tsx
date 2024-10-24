import { useEffect } from "react";
import "./App.css";

import Login from "./components/Login.tsx";

function App() {

  const fetchData = async () => {
    const res = await fetch("/api/");
    const res_json = await res.json();
    return res_json;
  };

  useEffect(() => {
    async function runEffect() {
      const json_res = await fetchData();
      console.log(json_res);
    }
    runEffect();
  }, []);

  return (
    <>
      <div className="main-content">
        <Login />
      </div>
    </>
  );
}

export default App;
