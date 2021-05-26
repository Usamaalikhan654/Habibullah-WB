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
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/Product" component={Product}/>
        <Route exact path="/Machine" component={Machine}/>
        <Route exact path="/Contact" component={Contact}/>
        
      </Switch>
    </HashRouter>
  );
}
