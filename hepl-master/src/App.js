import React from "react";
import { HashRouter, Route, Switch , Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./config/styles.scss";
import About from "./Pages/About Us/About";
import Product from "./Pages/Product Line/Product";
import Machine from "./Pages/Machinery and Tools/Machinery";
import Contact from "./Pages/Contact Us/Contact";

export default function App() {
  return (
    <HashRouter >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/machine" component={Machine} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </HashRouter>
  );
}
