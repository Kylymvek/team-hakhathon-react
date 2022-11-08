import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { laptopContext } from "../../../context/LaptopContextProvider";

const EditLaptop = () => {
  const { laptopDetails, readOneLaptop, editLaptop } =
    useContext(laptopContext);
  const [inpValues, setInpValues] = useState;
  const { id } = useParams;
  return <></>;
};

export default EditLaptop;
