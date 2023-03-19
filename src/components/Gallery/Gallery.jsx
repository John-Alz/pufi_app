import React from 'react'
import umbrella from '../../assets/umbrella.jpeg'
import cart from '../../assets/cart2_2.jpg'
import puff from '../../assets/puff_2_2.jpg'
import nap from '../../assets/nap_1_1.jpg'
import img4 from '../../assets/carrusel1.jpg'
import img6 from '../../assets/Carousel1.jpg'

export default function Gallery() {
  return (
    <div>
      <div className='socialmedia_container_instagram'>
      <p>INSTAGRAM</p>
      </div>
      <div className='socialmedia_container_spufi'>
      <h1>#ESPUFI</h1>
      </div>
      <div className='mosaic_container'>
      <img  src={cart} alt='PUFI PUFF'/>
      <img  src={umbrella} alt='PUFI PUFF'/>
      <img  src={puff} alt='PUFI PUFF'/>
      <img  src={img4} alt='PUFI PUFF'/>
      <img  src={nap} alt='PUFI PUFF'/>
      <img  src={img6} alt='PUFI PUFF'/>
      </div>
    </div>
  )
}
