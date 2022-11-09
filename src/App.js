import React from "react";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./context/LaptopContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
      {/* <AddLaptop /> */}
      <Footer />
    </ProductContextProvider>
  );
};

export default App;
