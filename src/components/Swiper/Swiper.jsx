import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import asus from "./Image/asus.jpeg";
import assasin from "./Image/assasin.jpeg";
import legion from "./Image/legion.jpeg";
import tuf from "./Image/tuf.gif";
import ryzen from "./Image/ryzen.jpeg";
import msi from "./Image/msi.jpeg";
import nvidia from "./Image/nvidia.jpeg";
import groot from "./Image/groot.jpeg";
import razer from "./Image/razer.jpeg";
import { height } from "@mui/system";

const HandleSwiper = () => {
  return (
    <>
      <Swiper
        style={{ width: "80%", marginTop: "10px" }}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img src={tuf} alt="logo" style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={razer}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={groot}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={nvidia}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={msi} alt="logo" style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ryzen}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={asus}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assasin}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={legion}
            alt="logo"
            style={{ width: "100%", height: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HandleSwiper;
