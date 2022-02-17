import styles from "../../styles/main/sidebar.module.scss";
import Pad from "../reusable/Pad";

const NAV_STORES = ["CU", "GS25", "7-Eleven", "Ministop", "Emart24"];

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <Pad>
        <>
          {NAV_STORES.map((store) => (
            <span>{store}</span>
          ))}
        </>
      </Pad>
    </aside>
  );
};

export default Sidebar;
