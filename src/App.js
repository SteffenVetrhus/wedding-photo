import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import Content from "./Content/Content.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter, Route } from "react-router-dom";
import MainImage from "./main.jpg";
import Between from "./between.jpg";

function App() {
  return (
    <BrowserRouter>
      <div className="wedding-photo-app">
        <Header></Header>
        <Content
          url={MainImage}
          text={"Bryllupsfotografering skal være oppriktig"}
        ></Content>
        <Content
          url={Between}
          text={
            "Det beste med bryllupsfotografering er alle øyeblikkene inne i mellom"
          }
        ></Content>

        <Footer></Footer>
        <Route path="/"></Route>
        <Route path="/om"></Route>
        <Route path="/fotografi"></Route>
        <Route path="/siste"></Route>
        <Route path="/kontakt"></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
