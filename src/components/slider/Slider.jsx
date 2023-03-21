
import React from "react";
import img_3_1 from '../../assets/img_3_2.jpg'
import img_2_4 from '../../assets/img_2_5.jpg'
import img_2_6 from '../../assets/img_2_6.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <div className="slider_container">
      <h1>ESTÁR CÓMODO <br/> NUNCA FUE TAN FÁCIL.</h1>
        <button>SHOP</button>
      </div>
      
      <SwiperSlide><img className='img' src={img_3_1} alt='PUFI PUFF' /></SwiperSlide>
      <SwiperSlide><img className='img' src={img_2_6} alt='PUFI PUFF' /></SwiperSlide>
      <SwiperSlide><img className='img' src={img_2_4} alt='PUFI PUFF' /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
