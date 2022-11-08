import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <>
      <footer>
        <Box
          px={{ xs: 3, sm: 5 }}
          py={{ xs: 5, sm: 5 }}
          bgcolor="black"
          color="white">
          <Container maxWidth="lg">
            <Grid container spacing={5} style={{ textAlign: "center" }}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Контакты
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    +996 701 320 055
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    г.Бишкек, ул. Абдрахманова 129
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    График работы: c 10:00 - 21:00
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Информация
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Доставка
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    О нас
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Контакты
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Новости
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={0} style={{ fontSize: "25px" }}>
                  Категории
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Смартфоны
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Ноутбуки
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    style={{ color: "white", textDecoration: "none" }}>
                    Планшеты
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Grid>
              <img
                src="https://almurut.kg/catalog/view/theme/almurut/image/logow.svg"
                alt="logo"
                style={{
                  width: "150px",
                  display: "flex",
                  margin: "20px auto",
                }}
              />
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 0, sm: 10 }}
              pb={{ xs: 5, sm: 0 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}>
              <TelegramIcon />
              <WhatsAppIcon />
              <InstagramIcon />
            </Box>
          </Container>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
