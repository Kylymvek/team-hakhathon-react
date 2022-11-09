import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Delivery = () => {
  return (
    <>
      <Container sx={{ marginBottom: "40px", marginTop: "10px" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
          }}>
          <Typography variant="h5">Получить бесплатную доставку</Typography>
          <TextField id="outlined-basic" label="Ваше имя" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Ваш телефон"
            variant="outlined"
          />
          <Button variant="contained" color="warning">
            Оставить заявку
          </Button>
        </Grid>
        <Grid>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
            variant="h4">
            Доставка и оплата
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://almurut.kg/catalog/view/theme/almurut/image/deliv.jpeg"
              alt="logo"
              style={{ width: "50%" }}
            />
          </Box>
          <Typography>
            И конечно, любой товар можно заказать с доставкой. Мы доставляем по
            Бишкеку в течение одного дня, а по регионам — на следующий день. Всё
            — без предоплаты, если нужно — в кредит. Оплата наличная или
            безналичная — как вам удобнее.
          </Typography>
          <Typography>
            <ul>
              <li>Доставка осуществляется с 10:00 до 21:00</li>
              <li>Доставка по городу Бишкек - бесплатно</li>
              <li>
                Время доставки – от одного до трех часов, в зависимости от
                месторасположения заказчика.
              </li>
              <li>Доставка по СНГ - согласно тарифу Курьерских служб</li>
              <li>
                Доставка по регионам Кыргызстана осуществляется через курьерские
                службы (сроки, стоимость и условия доставки индивидуальны) при
                100% предоплате.
              </li>
              <li>
                Самовывоз осуществляется ежедневно с 10.00 до 21.00 с любых
                наших филиалов
              </li>
            </ul>
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default Delivery;
