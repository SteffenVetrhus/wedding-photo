import React from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter, Route } from "react-router-dom";

import About from "./Pages/About/About.js";
import Home from "./Pages/Home/Home.js";
import Photography from "./Pages/Photography/Photography";
import Last from "./Pages/Last/Last";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="wedding-photo-app">
        <Header></Header>

        <Route path="/" exact component={Home}></Route>
        <Route path="/om" exact component={About}></Route>
        <Route path="/fotografi" exact component={Photography}></Route>
        <Route path="/tidligere" exact component={Last}></Route>
        <Route path="/kontakt" exact component={Contact}></Route>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
