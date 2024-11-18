import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";

import Sidebar from "./components/navbar/Sidebar";
import Submenu from "./components/navbar/Submenu";
import { Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import InfoGrid from "./page/InfoGrid";
import Login from "./login/Login";
import SingUp from "./singup/SingUp";
import { useAuthContext } from "./hooks/useAuthContext";
import { Redirect } from "react-router-dom";
import PageLogin from "./page/PageLogin";
import MavicSeries from "./components/series/mavic/MavicSeries";
import StoreList from "./page/storeList/StoreList";
import { useGlobalContext } from "./context";

import AirSeries from "./components/series/AirSeries";
import MiniSeries from "./components/series/mavic/MiniSeries";
import Footer from "./components/footer/Footer";
import DjiSeries from "./components/series/DjiSeres";
import VideoProduction from "./components/videoProduction/VideoProduction";

function App() {
  const { user } = useAuthContext();
  const [showNavbar, setShowNavbar] = useState(null);


  useEffect(() => {}, []);
  return (
    <div>
      <Navbar />

      <Sidebar />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dron/:id" children={<InfoGrid />}></Route>
        {
          <Route path="/mavic">
            <MavicSeries />
          </Route>
        }

        <Route path="/store/:id" children={<StoreList />}></Route>
        <Route path="/pagelogin">
          {!user && <Redirect to="/login" />}
          {user && <PageLogin />}
          <PageLogin />
        </Route>
        <Route path="/login">
          {user && <Redirect to="/pagelogin" />}
          {!user && <Login />}
        </Route>
        <Route path="/singup">
          {user && <Redirect to="/pagelogin" />}
          {!user && <SingUp />}
        </Route>
        <Route path="/storelist">
          <StoreList navShow={showNavbar} />
        </Route>
        <Route path="/air">
          <AirSeries />
        </Route>
        <Route path="/mini">
          <MiniSeries />
        </Route>
        <Route path="/dji">
          <DjiSeries />
        </Route>
        <Route path="/video">
          <VideoProduction />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
