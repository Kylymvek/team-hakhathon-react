import { Button, TextField } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { laptopContext } from "../../../context/LaptopContextProvider";

const EditLaptop = () => {
  const { laptopDetails, readOneLaptop, editLaptop } =
    useContext(laptopContext);
  const [inpValues, setInpValues] = useState(laptopDetails);
  const { id } = useParams();

  useEffect(() => {
    readOneLaptop(id);
  }, [id]);

  function handleChange(e) {
    let lapObj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(lapObj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault(); //останавливает автообновление form
    if (
      !inpValues.brand.trim() ||
      !inpValues.model.trim() ||
      !inpValues.description.trim() ||
      !inpValues.color.trim() ||
      !inpValues.price ||
      !inpValues.photo1.trim() ||
      !inpValues.photo2.trim() ||
      !inpValues.photo3.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    editLaptop(id, inpValues);
    navigate("/");
  }

  return (
    <>
      <h2 id="add-title">Редактирование товара</h2>
      <form id="form-add" onSubmit={e => handleSave(e)}>
        <TextField
          className="outlined-basic"
          label="Бренд"
          variant="outlined"
          name="brand"
          value={inpValues.brand}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Модель"
          variant="outlined"
          name="model"
          value={inpValues.model}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          name="description"
          value={inpValues.description}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Цвет"
          variant="outlined"
          name="color"
          value={inpValues.color}
          onChange={e => handleChange(e)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          name="price"
          value={+inpValues.price}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
          name="photo1"
          value={inpValues.photo1}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
          name="photo2"
          value={inpValues.photo2}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
          name="photo3"
          value={inpValues.photo3}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit">
          Сохранить
        </Button>
      </form>
    </>
  );
};

export default EditLaptop;
