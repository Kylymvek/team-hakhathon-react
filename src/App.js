import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
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
