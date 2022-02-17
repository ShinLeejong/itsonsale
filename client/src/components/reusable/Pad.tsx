import styles from "../../styles/reusable/pad.module.scss";

interface Props {
  children: JSX.Element;
}

const Pad = ({ children }: Props) => {
  return <div className={styles.padContainer}>{children}</div>;
};

export default Pad;
