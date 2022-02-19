// import axios from "axios";
import { Link } from "react-router-dom";
import styles from "../../styles/reusable/store.module.scss";

interface Props {
  children: JSX.Element;
  color__font: string;
  color__bg: string;
  get: string;
}

const Store = ({ children, color__font, color__bg, get }: Props) => {
  /* const onClickStore = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/${get}`);
      console.log(res);
    } catch (e) {
      console.error(e);
    }
  }; */
  const onClickStore = () => {
    console.log(get);
  };
  return (
    <Link to={`itsonsale/${get}`}>
      <div
        style={{ color: color__font, backgroundColor: color__bg }}
        className={styles.storeContainer}
        role="button"
        onClick={onClickStore}
      >
        {children}
      </div>
    </Link>
  );
};

export default Store;
