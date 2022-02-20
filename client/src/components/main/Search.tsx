import { useState } from "react";
import styles from "../../styles/main/search.module.scss";

interface SearchProps {
  event: string;
  category: string;
  sort: string;
  name: string;
}

const Search = () => {
  const [search, setSearch] = useState<SearchProps>({
    event: "",
    category: "",
    sort: "",
    name: "",
  });
  const { event, category, sort, name } = search;

  const onChangeSearch = (e: { target: { name: any; value: any } }) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <form className={styles.formContainer}>
      <select name="event" value={event} onChange={onChangeSearch}>
        <option value="" defaultChecked>
          Event-전체
        </option>
        <option value="1">1+1</option>
        <option value="2">2+1</option>
      </select>
      <select name="category" value={category} onChange={onChangeSearch}>
        <option value="">분류-전체</option>
        <option value="1">음료수</option>
        <option value="2">아이스크림</option>
        <option value="3">생필품</option>
      </select>
      <select name="sort" value={sort} onChange={onChangeSearch}>
        <option value="">정렬-상품명</option>
        <option value="1">낮은 가격순</option>
        <option value="2">높은 가격순</option>
      </select>
      <div className={styles.submitContainer}>
        <label>
          상품명
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeSearch}
          ></input>
        </label>
        <button type="submit" aria-label="search" onClick={onSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
