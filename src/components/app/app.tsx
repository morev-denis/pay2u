import { Route, Routes } from "react-router-dom";

import MainScreen from "../../pages/main-screen/main-screen";

import { AppRoute } from "../../const";

const App = () => {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen />} />
    </Routes>
  );
};

export default App;
