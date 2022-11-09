import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HandleSwiper from "./components/Swiper/Swiper";
import MainRoutes from "./MainRoutes";
import LaptopsList from "./components/Laptops/LaptopsList/LaptopsList";
// import AddLaptop from "./components/Adminushka/AddLapTop/AddLaptop";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./context/LaptopContextProvider";
import "./components/Swiper/style.css";
import BasketContextProvider from "./context/BasketContextProvider";

const App = () => {
  return (
    <BasketContextProvider>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        {/* <AddLaptop /> */}
        {/* <LaptopsList /> */}
        <Footer />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
