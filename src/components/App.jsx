import React from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BeerConnect from "../components/Beer/Beer.jsx";
import FavouriteBeerConnect from "../components/Main/FavouriteBeer/FavouriteBeer.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import routes from "../constants/resources/routes.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={routes.main} component={Main} />
        <Route
          exact
          path={routes.favourites}
          component={FavouriteBeerConnect}
        />
        <Route exact path={routes.beer} component={BeerConnect} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
