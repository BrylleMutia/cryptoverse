import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.scss";

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from "./components";

const App = () => {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
            </Switch>
          </div>
        </Layout>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
