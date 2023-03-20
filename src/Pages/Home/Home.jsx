import React from 'react'
import Footer from '../../components/Footer/Footer'
import Form from '../../components/Form/Form'
import Gallery from '../../components/Gallery/Gallery'
import Navbar from '../../components/Navbar/NavBar'
import Products from '../../components/Products/Products'
import Slider from '../../components/slider/Slider'

export default function Homes() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Products/>
      <Gallery/>
      <Form/>
      <Footer/>
    </div>
  )
}
