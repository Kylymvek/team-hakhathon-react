import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AddLapTop from "./components/Adminushka/AddLapTop/AddLapTop";
import EditLaptop from "./components/Adminushka/EditLaptop/EditLaptop";
import BasketLap from "./components/BasketLap/BasketLap";
import Delivery from "./components/Delivery/Delivery";
import HomePage from "./components/HomePage/HomePage";
import LaptopDetails from "./components/Laptops/LaptopDetails/LaptopDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/add" element={<AddLapTop />} />
      <Route path="/details/:id" element={<LaptopDetails />} />
      <Route path="/edit/:id" element={<EditLaptop />} />
      <Route path="/basket" element={<BasketLap />} />
    </Routes>
  );
};

export default MainRoutes;
