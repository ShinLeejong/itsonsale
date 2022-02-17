import styles from "../../styles/main/sidebar.module.scss";
import Pad from "../reusable/Pad";
import Store from "../reusable/Store";

const NAV_STORES = [
  { get: "cu", store: "CU", color__font: "#9CC92B", color__bg: "#751385" },
  { get: "gs25", store: "GS25", color__font: "#FB6819", color__bg: "#01B0D0" },
  {
    get: "7eleven",
    store: "7-Eleven",
    color__font: "#DA4048",
    color__bg: "#008060",
  },
  {
    get: "ministop",
    store: "Ministop",
    color__font: "#17469E",
    color__bg: "#fec20b",
  },
  {
    get: "emart24",
    store: "Emart24",
    color__font: "#FEB718",
    color__bg: "#5B5B60",
  },
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebarContainer}>
      <Pad>
        <nav>
          {NAV_STORES.map((store) => (
            <Store
              color__bg={store.color__bg}
              color__font={store.color__font}
              key={store.store}
              get={store.get}
            >
              <span className={styles.storeName}>{store.store}</span>
            </Store>
          ))}
        </nav>
      </Pad>
    </aside>
  );
};

export default Sidebar;
