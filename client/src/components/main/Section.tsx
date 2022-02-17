import styles from "../../styles/main/section.module.scss";
import Pad from "../reusable/Pad";
import Router from "../router/Router";

const Section = () => {
  return (
    <section className={styles.sectionContainer}>
      <Pad>
        <Router />
      </Pad>
    </section>
  );
};

export default Section;
