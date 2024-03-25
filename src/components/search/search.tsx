import "./search.css";

import lt from "../../images/lt.svg";
import bell from "../../images/bell.svg";

const Search = () => {
  return (
    <div className="search__wrap">
      <a className="search__link" href={"/"}>
        <img srcSet={lt} alt="lt" className="search__back"></img>
      </a>

      <form className="search__form">
        <input
          className="search__input"
          type="text"
          placeholder="Поиск сервиса"
        ></input>
      </form>

      <a className="search__link_2" href="/">
        <img className="search__bell" srcSet={bell} alt="bell"></img>
      </a>
    </div>
  );
};

export default Search;
