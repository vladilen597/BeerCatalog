import React, { Component } from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleBeerConnected from "../containers/SingleBeerContainer.jsx";
import FavouriteBeerConnected from "../containers/FavouriteBeerContainer.jsx";

class App extends Component {
  state = { id: 0 };

  getId = (id) => {
    this.setState({ id: id });
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Main getId={this.getId} />} />
          <Route
            path="/beers/:id"
            exact
            render={() => <SingleBeerConnected id={this.state.id} />}
          />
          <Route
            exact
            path="/favourite"
            render={() => <FavouriteBeerConnected />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
