import React from "react";
import { BrowserRouter as Router, Route, Switch , Redirect } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./config/styles.scss";
import About from "./Pages/About Us/About";
import Product from "./Pages/Product Line/Product";
import Machine from "./Pages/Machinery and Tools/Machinery";
import Contact from "./Pages/Contact Us/Contact";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/" component={About}/>
        <Route exact path="/" component={Product}/>
        <Route exact path="/" component={Machine}/>
        <Route exact path="/" component={Contact}/>
        
      </Switch>
    </Router>
  );
}
