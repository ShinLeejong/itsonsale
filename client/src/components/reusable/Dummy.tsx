import styles from "../../styles/reusable/product.module.scss";

interface Props {
  company: string;
  name: string;
  price: number;
  event: string;
  //   img: string;
  color__font: string;
  color__bg: string;
}

const Dummy = ({
  company,
  name,
  price,
  event,
  //   img,
  color__font,
  color__bg,
}: Props) => {
  return (
    <div
      className={styles.productContainer}
      style={{ border: `1px solid ${color__bg}` }}
    >
      <div
        className={styles.companyContainer}
        style={{ backgroundColor: color__bg }}
      >
        <span className={styles.company} style={{ color: color__font }}>
          {company}
        </span>
        <span className={styles.event}>{event}</span>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.nameAndPrice}>
          <span className={styles.name}>{name}</span>
          <div className={styles.priceAndReview}>
            <span className={styles.price}>{price}원</span>
            <span>리뷰</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummy;
