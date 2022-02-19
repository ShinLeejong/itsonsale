import { Fragment } from "react";
import products from "../products/products.json";
import Product from "../reusable/Product";
import styles from "../../styles/main/cu.module.scss";

const ProductList = () => {
  return (
    <>
      <div className={styles.productsContainer}>
        {products.map((product) => (
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
        ))}
      </div>
    </>
  );
};

export default ProductList;
