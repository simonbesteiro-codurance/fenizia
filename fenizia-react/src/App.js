import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Login from "./components/Login";
import News from "./components/News";

function App(props) {
  return (
    <div className="container">
      <Header />
      <div className="margin-top">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/login" exact component={Login} />
          <Route path="/novedades" exact component={News} />
          {/* <Route path="/hero/:heroId" component={FeniziaDetail} />
				<Route path="/hero" component={HeroDetail} />
				<Route path="/heroes" component={HeroesPage} />
				<Route component={PageNotFound} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
