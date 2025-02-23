import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateInvitation from "./components/CreateInvitation";
import Login from "./components/Login";
import { useJsApiLoader } from "@react-google-maps/api";

const mapLibraries = ["places"];

const App = () => {
  const location = useLocation();
  const showNavbar = !location.pathname.includes("/invitation/");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC_SWzf8RHvi-bp_15paSOy-ojqL0Bzdyw",
    libraries: mapLibraries,
  });

  if (!isLoaded) return <div>Loading Maps...</div>; // Отображаем "загрузка" пока карты загружаются

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateInvitation />} />
      </Routes>
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
