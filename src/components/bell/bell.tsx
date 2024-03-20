import bell from "../../images/bell.svg";

const Bell = () => {
  return (
    <a href="/">
      <img className="bell" srcSet={bell} alt="bell"></img>
    </a>
  );
};

export default Bell;
