import { Route, Routes } from "react-router-dom";

import HistoryRouter from "../history-router/history-router";
import browserHistory from "../../browser-history";

import MainScreen from "../../pages/main-screen/main-screen";

import { AppRoute } from "../../const";

const App = () => {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
