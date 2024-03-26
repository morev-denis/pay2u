import "./cards.css";

import cat1 from "../../images/i_cat.png";
import cat2 from "../../images/i_cat2.png";
import cat3 from "../../images/i_cat3.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card__title">В этом месяце</div>
      <div className="card__container">
        <div className="card__content card__cashback">
          <div className="card__name">Кэшбэк</div>
          <div className="card__sum">0 ₽</div>
          <img className="card__image" src={cat1} alt="cat1" />
        </div>
        <div className="card__content card__paid">
          <div className="card__name">К оплате</div>
          <div className="card__sum">0 ₽</div>
          <img className="card__image" src={cat2} alt="cat2" />
        </div>
        <div className="card__content card__expenses">
          <div className="card__name">Расходы</div>
          <div className="card__sum">0 ₽</div>
          <img className="card__image" src={cat3} alt="cat3" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
