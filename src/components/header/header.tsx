import "./header.css";

import lt from "../../images/lt.svg";

const Header = () => {
  return (
    <a className="header" href={"/"}>
      <img src={lt} alt="lt" className="back-sign"></img>
      <div className="back-word">Назад</div>
    </a>
  );
};

export default Header;
