import styles from "../../styles/main/section.module.scss";
import Pad from "../reusable/Pad";

const Section = () => {
  return (
    <section className={styles.sectionContainer}>
      <Pad>
        <span>Section</span>
      </Pad>
    </section>
  );
};

export default Section;
