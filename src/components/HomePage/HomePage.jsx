import React from "react";
import LaptopsList from "../Laptops/LaptopsList/LaptopsList";
import HandleSwiper from "../Swiper/Swiper";

const HomePage = () => {
  return (
    <div>
      <HandleSwiper />
      <LaptopsList />
    </div>
  );
};

export default HomePage;
