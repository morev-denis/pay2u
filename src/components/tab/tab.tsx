import "./tab.css";
import tab__pic1 from "../../images/house.svg";
import tab__pic2 from "../../images/calendar.svg";
import tab__pic3 from "../../images/catalog.svg";
import tab__pic4 from "../../images/compare.svg";
import tab__pic5 from "../../images/profile.svg";

const Tab = () => {
  return (
    <div className="tab__wrap">
      <a href="/" className="tab__link">
        <img className="tab__image" src={tab__pic1} alt="house"></img>
        <p className="tab__paragraph">Главная</p>
      </a>

      <a href="/" className="tab__link">
        <img className="tab__image" src={tab__pic2} alt="calendar"></img>
        <p className="tab__paragraph">Календарь</p>
      </a>

      <a href="/" className="tab__link">
        <img className="tab__image" src={tab__pic3} alt="catalog"></img>
        <p className="tab__paragraph">Каталог</p>
      </a>

      <a href="/" className="tab__link">
        <img className="tab__image" src={tab__pic4} alt="compare"></img>
        <p className="tab__paragraph">Сравнение</p>
      </a>

      <a href="/" className="tab__link">
        <img className="tab__image" src={tab__pic5} alt="profile"></img>
        <p className="tab__paragraph">Профиль</p>
      </a>
    </div>
  );
};

export default Tab;
