"use client";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation, Autoplay } from "swiper/modules"; // Correct import for Swiper 11+
import "swiper/css/autoplay";

import FirstCohort from "./FirstCohort";
import SecondCohort from "./SecondCohort";

const CustomSwiper = () => {
  return (
    <SwiperComponent
      navigation={true}
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Keep autoplay running after interaction
        pauseOnMouseEnter: true, // Pause autoplay when the user hovers
      }}
    >
      <SwiperSlide>
        <FirstCohort />
      </SwiperSlide>
      <SwiperSlide>
        <SecondCohort />
      </SwiperSlide>
    </SwiperComponent>
  );
};

export default CustomSwiper;
