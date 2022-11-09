import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

function getCountLaptopsBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.laptops?.length : 0;
}

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountLaptopsBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
    default:
      return prevState;
  }
}

const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addLaptopToBasket(laptopObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        laptops: [],
        totalPrice: 0,
      };
    }

    let newLaptop = {
      item: laptopObj,
      count: 1,
      subPrice: laptopObj.price,
    };

    //Хранение дубликатов
    let filterBasket = basket.laptops.filter(elem => {
      return elem.item.id === laptopObj.id;
    });

    if (filterBasket.length > 0) {
      basket.laptops = basket.laptops.filter(elem => {
        return elem.item.id !== laptopObj.id;
      });
    } else {
      basket.laptops.push(newLaptop);
    }
    basket.totalPrice = calcTotalPrice(basket.laptops);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.laptops.length,
    });
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        laptops: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeLaptopCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.laptops = basket.laptops.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    basket.totalPrice = calcTotalPrice(basket.laptops);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function calcTotalPrice(laptops) {
    let total = 0;
    laptops.map(item => {
      total += item.subPrice;
    });
    return total;
  }

  //delete laptop from basket
  function deleteBasketLaptop(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.laptops = basket.laptops.filter(elem => {
      return elem.item.id !== id;
    });
    basket.totalPrice = calcTotalPrice(basket.laptops);
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.laptops.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addLaptopToBasket,
    getBasket,
    changeLaptopCount,
    deleteBasketLaptop,
    laptopsInBasket: state.basket,
    basketCount: state.basketCount,
  };

  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
