
import React from "react";
import carrusel1 from '../../assets/carrusel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carrousel_3_3 from '../../assets/carrousel_3_3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
      <div className="slider_container">
      <h1>ESTÁR CÓMODO <br/> NUNCA FUE TAN FÁCIL.</h1>
        <button>SHOP</button>
      </div>
      <SwiperSlide><img className='img' src={carousel2} alt='PUFI PUFF' /></SwiperSlide>
      {/* <SwiperSlide><img className='img' src={carrousel_3_3} alt='PUFI PUFF' /></SwiperSlide> */}
      <SwiperSlide><img className='img' src={carrusel1} alt='PUFI PUFF' /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
