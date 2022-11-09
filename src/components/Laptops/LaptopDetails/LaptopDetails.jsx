import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { AddShoppingCart } from "@mui/icons-material";
import LaptopIcon from "@mui/icons-material/Laptop";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Thumbs } from "swiper";
import { useContext } from "react";
import { laptopContext } from "../../../context/LaptopContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import "./LaptopDetails.css";
import { basketContext } from "../../../context/BasketContextProvider";

SwiperCore.use([Thumbs]);

const LaptopDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { laptopDetails, readOneLaptop, deleteLaptop } =
    useContext(laptopContext);

  const { addLaptopToBasket } = useContext(basketContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    readOneLaptop(id);
  }, [id]);

  return (
    <>
      {laptopDetails ? (
        <Container sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                className="mySwiper2"
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img src={laptopDetails.photo1} alt={laptopDetails.brand} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={laptopDetails.photo2} alt={laptopDetails.brand} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={laptopDetails.photo3} alt={laptopDetails.brand} />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper">
                <SwiperSlide className="swiper-slide-details">
                  <Paper elevation={3}>
                    <img src={laptopDetails.photo1} alt={laptopDetails.brand} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-details">
                  <Paper elevation={3}>
                    <img src={laptopDetails.photo2} alt={laptopDetails.brand} />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-details">
                  <Paper elevation={3}>
                    <img src={laptopDetails.photo3} alt={laptopDetails.brand} />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
                <Typography variant="h4">
                  {laptopDetails.brand} <LaptopIcon sx={{ fontSize: "30px" }} />
                </Typography>
                <Typography variant="h5">{laptopDetails.model}</Typography>
                <hr />
                <Typography sx={{ marginTop: "30px" }}>
                  О ноутбуке:{<span> </span>}
                  {laptopDetails.description}
                </Typography>
                <Typography sx={{ marginTop: "30px" }}>
                  Цвет: {<span> </span>}
                  {laptopDetails.color}
                </Typography>
                <Alert
                  sx={{
                    fontSize: "25px",
                    fontWeight: 700,
                    mt: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}>
                  Цена: {laptopDetails.price} сом
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addLaptopToBasket(laptopDetails)}>
                    Добавить в корзину {<span> </span>} <AddShoppingCart />
                  </Button>
                </Alert>
                <Box
                  sx={{
                    mt: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ width: "48%" }}
                    onClick={() => deleteLaptop(laptopDetails.id)}>
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{ width: "48%" }}
                    onClick={() => navigate(`/edit/${laptopDetails.id}`)}>
                    Edit
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default LaptopDetails;
