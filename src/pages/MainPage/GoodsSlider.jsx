import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import GoodsCard from "../../Components/Card";

export default function GoodsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="text-dark">
          <GoodsCard />
        </SwiperSlide>

       

      </Swiper>
    </>
  );
}
