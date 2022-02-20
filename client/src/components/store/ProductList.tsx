import { Fragment } from "react";
import products from "../products/products.json";
import Product from "../reusable/Product";
import styles from "../../styles/main/productList.module.scss";
import { useParams } from "react-router-dom";
import Dummy from "../reusable/Dummy";

const ProductList = () => {
  const { store } = useParams();
  console.log(store);

  const fetch = () => {
    let dummy = [];
    switch (store) {
      case "cu":
        for (let i = 0; i < 20; i++) {
          dummy.push(
            <Dummy
              company="CU"
              name="cu"
              price={100}
              event="1+1"
              color__bg="#751385"
              color__font="#9CC92B"
              key={i}
            ></Dummy>
          );
        }
        return dummy;
      case "gs25":
        for (let i = 0; i < 20; i++) {
          dummy.push(
            <Dummy
              company="GS25"
              name="gs"
              price={100}
              event="1+1"
              color__bg="#01B0D0"
              color__font="#FB6819"
              key={i}
            ></Dummy>
          );
        }
        return dummy;
      case "ministop":
        for (let i = 0; i < 20; i++) {
          dummy.push(
            <Dummy
              company="Ministop"
              name="gs"
              price={100}
              event="1+1"
              color__bg="#fec20b"
              color__font="#17469E"
              key={i}
            ></Dummy>
          );
        }
        return dummy;
      case "7eleven":
        for (let i = 0; i < 20; i++) {
          dummy.push(
            <Dummy
              company="7-Eleven"
              name="gs"
              price={100}
              event="1+1"
              color__bg="#008060"
              color__font="#DA4048"
              key={i}
            ></Dummy>
          );
        }
        return dummy;
      case "emart24":
        for (let i = 0; i < 20; i++) {
          dummy.push(
            <Dummy
              company="Emart24"
              name="gs"
              price={100}
              event="1+1"
              color__bg="#5B5B60"
              color__font="#FEB718"
              key={i}
            ></Dummy>
          );
        }
        return dummy;
    }
  };
  return (
    <>
      <div className={styles.productsContainer}>
        {/* {products.map((product) => (
          <Fragment key={product.idx}>
            <Product
              company="cu"
              name={product.name}
              price={product.price}
              event={product.event}
              img={product.img}
              color__bg="#751385"
              color__font="#9CC92B"
            />
          </Fragment>
        ))} */}
        {fetch()}
      </div>
    </>
  );
};

export default ProductList;
