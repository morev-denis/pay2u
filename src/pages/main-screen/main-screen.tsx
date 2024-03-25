import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Search from "../../components/search/search";
import Card from "../../components/card/card";
import Subscription from "../../components/subsciption/subscription";
import Offer from "../../components/offer/offer";
import Tab from "../../components/tab/tab";

import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";

import "./main-screen.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MainScreen = () => {
  return (
    <>
      <Search />
      <Carousel responsive={responsive} infinite={true} className="carousel">
        <img src={pic1} alt="" className="pic"></img>
        <img src={pic2} alt="" className="pic"></img>
        <img src={pic3} alt="" className="pic"></img>
      </Carousel>
      <Card />
      <Subscription />
      <Offer />
      <Tab />
    </>
  );
};

export default MainScreen;
