import { Link } from "react-router-dom";
import styles from "../../styles/header/header.module.scss";

const LOGO = `It's on Sale`;

const NAV_CONTENTS = ["게시판", "즐겨찾기"];

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <h3>
          <Link to="/">{LOGO}</Link>
        </h3>
        <nav>
          {NAV_CONTENTS.map((content) => (
            <span key={content}>{content}</span>
          ))}
        </nav>
        <div className={styles.dummy}></div>
        <div className={styles.sessionContainer}>
          <span>로그인</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
