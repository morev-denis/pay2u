import "./card.css";

import cat1 from "../../images/i_cat.png";
import cat2 from "../../images/i_cat2.png";
import cat3 from "../../images/i_cat3.png";

const Card = () => {
  return (
    <div className="div-0">
      <div className="div-1">В этом месяце</div>
      <div className="container">
        <div className="div-2">
          <div className="div-3">Кэшбек</div>
          <div className="div-4">
            <b>1050 ₽</b>
          </div>
          <img src={cat1} alt="cat1" />
        </div>
        <div className="div-2">
          <div className="div-3">К оплате</div>
          <div className="div-4">
            <b>2050 ₽</b>
          </div>
          <img src={cat2} alt="cat1" />
        </div>
        <div className="div-2">
          <div className="div-3">Расходы</div>
          <div className="div-4">
            <b>650 ₽</b>
          </div>
          <img src={cat3} alt="cat1" />
        </div>
      </div>
    </div>
  );
};

export default Card;
