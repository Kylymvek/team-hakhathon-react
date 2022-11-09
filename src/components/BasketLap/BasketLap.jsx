import React, { useContext, useEffect } from "react";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { basketContext } from "../../context/BasketContextProvider";

const BasketLap = () => {
  const { laptopsInBasket, getBasket, changeLaptopCount, deleteBasketLaptop } =
    useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">My Basket</Typography>
        {laptopsInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Model</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Count</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>SubPrice</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {laptopsInBasket.laptops.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell>{elem.item.brand}</TableCell>
                      <TableCell>{elem.item.model}</TableCell>
                      <TableCell>
                        <img src={elem.item.photo1} alt="apple" width={40} />
                      </TableCell>
                      <TableCell>{elem.item.price}</TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{ width: "40px" }}
                          value={elem.count}
                          onChange={e =>
                            changeLaptopCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>{elem.subPrice} сом</TableCell>
                      <TableCell
                        onClick={() => deleteBasketLaptop(elem.item.id)}>
                        <DeleteOutlineIcon className="deleteIconBasket" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ margin: "20px auto" }}>
              Buy now for {laptopsInBasket.totalPrice}
            </Button>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
};

export default BasketLap;
