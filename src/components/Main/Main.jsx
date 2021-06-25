import React from "react";
import login from "../hoc/login";
import new_component from "../hoc/new_component";
import "./Main.css";
import Posts from "./Posts/Posts";
import SideBar from "./SideBar/SideBar";


function Main() {
  return (
    <div className="container">
      <div className="main">
        <Posts />
        <SideBar />

      </div>
    </div>
  );
}

export default new_component(login(Main))
