import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { orange } from "@mui/material/colors";
import "./AddLaptop.css";
import { useContext } from "react";
import { laptopContext } from "../../../context/LaptopContextProvider";

const AddLaptop = () => {
  const { addLaptop } = useContext(laptopContext);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");

  function handleAdd(e) {
    e.preventDefault(); //останавливает автообновление form
    if (
      !brand.trim() ||
      !model.trim() ||
      !description.trim() ||
      !color.trim() ||
      !price.trim() ||
      !photo1.trim() ||
      !photo2.trim() ||
      !photo3.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    let lapObj = {
      brand,
      model,
      description,
      color,
      price: +price,
      photo1,
      photo2,
      photo3,
    };

    addLaptop(lapObj);
    setBrand("");
    setModel("");
    setDescription("");
    setColor("");
    setPrice(0);
    setPhoto1("");
    setPhoto2("");
    setPhoto3("");
  }

  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="form-add" onSubmit={e => handleAdd(e)}>
        <TextField
          className="outlined-basic"
          label="Бренд"
          variant="outlined"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Модель"
          variant="outlined"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Цвет"
          variant="outlined"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
          value={photo1}
          onChange={e => setPhoto1(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
          value={photo2}
          onChange={e => setPhoto2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
          value={photo3}
          onChange={e => setPhoto3(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: orange[900] }}>
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddLaptop;
