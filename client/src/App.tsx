import { Fragment } from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import Section from "./components/main/Section";
import Sidebar from "./components/main/Sidebar";

const contents = [<Sidebar />, <Section />];

function App() {
  return (
    <main className={styles.mainContainer}>
      {contents.map((content, idx) => (
        <Fragment key={idx}>{content}</Fragment>
      ))}
    </main>
  );
}

export default App;
