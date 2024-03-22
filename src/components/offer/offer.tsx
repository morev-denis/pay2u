import "./offer.css";

import offer1 from "../../images/wink.png";
import offer2 from "../../images/vk.png";
import offer3 from "../../images/twitch.png";

const Offer = () => {
  return (
    <div className="offer__wrap">
      <div className="offer__wrap_2">
        <p className="offer__paragraph">Лучшие предложения</p>
        <a className="offer__link" href="/">
          Смотреть все
        </a>
      </div>
      <div className="offer__wrap_3">
        <div className="offer__card">
          <img className="offer__image" src={offer1} alt="Wink" />
          <p className="offer__text">Wink</p>
          <p className="offer__text">от 300 ₽/мес</p>
          <p className="offer__text offer__cashback">Кешбэк до 7%</p>
        </div>
        <div className="offer__card">
          <img className="offer__image" src={offer2} alt="VK music" />
          <p className="offer__text">VK Music</p>
          <p className="offer__text">от 120 ₽/мес</p>
          <p className="offer__text offer__cashback">Кешбэк до 5%</p>
        </div>
        <div className="offer__card">
          <img className="offer__image" src={offer3} alt="Twitch" />
          <p className="offer__text">Twitch</p>
          <p className="offer__text">от 400 ₽/мес</p>
          <p className="offer__text offer__cashback">Кешбэк до 12%</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
