import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const laptopContext = createContext(); // облако

const API = "http://localhost:8000/laptops";

const INIT_STATE = {
  laptops: null,
  laptopDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_LAPTOP":
      return {
        ...prevState,
        laptops: action.payload.data,
      };
    case "GET_ONE_LAPTOP":
      return { ...prevState, laptopDetails: action.payload };
    default:
      return prevState;
  }
}

const LaptopContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  //! create
  async function addLaptop(newLaptop) {
    try {
      await axios.post(API, newLaptop);
    } catch (error) {
      return error;
    }
  }

  //! read
  async function readLaptop() {
    const res = await axios(API);
    dispatch({
      type: "GET_LAPTOP",
      payload: res,
    });
  }

  //! delete
  async function deleteLaptop(id) {
    try {
      const res = await axios.delete(`${API}/${id}`);
      readLaptop();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  //! edit
  // async function editLaptop() {
  //   await axios.patch(`${API}/${id}`, editedObj);
  //   readLaptop();
  // }

  //! функция для детального обзора

  async function readOneLaptop(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_LAPTOP",
      payload: data,
    });
  }

  let cloud = {
    addLaptop,
    readLaptop,
    deleteLaptop,
    readOneLaptop,
    // editLaptop,
    laptopsArr: state.laptops,
    laptopDetails: state.laptopDetails,
  };

  return (
    <laptopContext.Provider value={cloud}>
      {props.children}
    </laptopContext.Provider>
  );
};

export default LaptopContextProvider;
