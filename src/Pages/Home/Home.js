import React from "react";
import Content from "./Content/Content";
import "./Home.css";
import MainImage from "./main.jpg";
import Between from "./between.jpg";
function Home() {
  return (
    <div>
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
    </div>
  );
}
export default Home;
