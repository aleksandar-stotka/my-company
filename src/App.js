import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Company from "./page/Company";
import InfoGrid from "./page/InfoGrid";
import Products from "./page/Products";
import Login from "./login/Login";
import SingUp from "./singup/SingUp";

function App() {
  return (
    <div>
      <Navbar />

      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/person/:id" children={<InfoGrid />}></Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/singup">
          <SingUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
