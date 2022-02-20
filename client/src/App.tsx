import axios from "axios";
import { Fragment } from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Section from "./components/main/Section";
import Sidebar from "./components/main/Sidebar";

const contents = [<Sidebar />, <Section />];

function App() {
  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:8080");
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  };

  fetch();
  return (
    <main className={styles.mainContainer}>
      {contents.map((content, idx) => (
        <Fragment key={idx}>{content}</Fragment>
      ))}
    </main>
  );
}

export default App;
