import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState(undefined);
  const onClickFetch = async () => {
    try {
      const res = await axios.get("http://localhost:8080/");
      setMsg(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="App">
      <button onClick={onClickFetch}>Fetch</button>
      <span>{msg}</span>
    </div>
  );
}

export default App;
