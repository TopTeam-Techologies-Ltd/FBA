"use client";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation } from " swiper/modules";
import FirstCohort from "./FirstCohort";
import SecondCohort from "./SecondCohort";
const CustomSwiper = () => {
  return (
    <>
      <SwiperComponent navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <FirstCohort />
        </SwiperSlide>
        <SwiperSlide>
          <SecondCohort />
        </SwiperSlide>
      </SwiperComponent>
    </>
  );
};

export default CustomSwiper;
