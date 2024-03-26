import Search from "../../components/search/search";
import Cards from "../../components/cards/cards";
import Subscription from "../../components/subsciption/subscription";
import Offer from "../../components/offer/offer";
import Tab from "../../components/tab/tab";
import Story from "../../components/story/story";

const MainScreen = () => {
  return (
    <>
      <Search />
      <Story />
      <Cards />
      <Subscription />
      <Offer />
      <Tab />
    </>
  );
};

export default MainScreen;
