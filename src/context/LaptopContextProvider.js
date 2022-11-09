import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const laptopContext = createContext(); // облако

const API = "http://localhost:8000/laptops";

const INIT_STATE = {
  laptops: null,
  laptopDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_LAPTOP":
      return {
        ...prevState,
        laptops: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_LAPTOP":
      return { ...prevState, laptopDetails: action.payload };
    default:
      return prevState;
  }
}

const LaptopContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

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
    const res = await axios(`${API}${location.search}`);
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
  async function editLaptop(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readLaptop();
  }

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
    editLaptop,
    laptopsArr: state.laptops,
    laptopDetails: state.laptopDetails,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <laptopContext.Provider value={cloud}>
      {props.children}
    </laptopContext.Provider>
  );
};

export default LaptopContextProvider;
