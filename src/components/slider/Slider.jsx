
import React from "react";
import carrusel1 from '../../assets/carrusel1.jpg'
import carousel1 from '../../assets/Carousel1.jpg'
import carousel2 from '../../assets/Carousel2.jpg'
import carousel4 from '../../assets/Carousel4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <div className="slider_container">
      <h1>ESTÁR CÓMODO <br/> NUNCA FUE TAN FÁCIL.</h1>
      <button>SHOP</button>
      </div>
      <SwiperSlide><img className='img' src={carousel2} alt='PUFI PUFF' /></SwiperSlide>
      <SwiperSlide><img className='img' src={carrusel1} alt='PUFI PUFF' /></SwiperSlide>
        <SwiperSlide><img className='img' src={carousel1} alt='PUFI PUFF' /></SwiperSlide>
      </Swiper>
    </>
  );
}
