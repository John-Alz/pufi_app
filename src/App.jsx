import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Gallery from './components/Gallery/Gallery'
import Navbar from './components/Navbar/NavBar'
import Products from './components/Products/Products'
import Slider from './components/slider/Slider'
import {useEffect} from 'react'

//Imagenes products
// Umbrella
import umbrella from './assets/umbrella.jpeg'
import umbrella2 from './assets/umbrella_product.jpg'

//puff
import puff_product from './assets/puff_product4.jpg'
import puff from './assets/puff_2_2.jpg'

//cart
import cart from './assets/cart2_2.jpg'
import cart_product from './assets/cart_product2.jpg'

//nap
import nap from './assets/napppp.jpg'
import nap_1 from './assets/nap_1_1.jpg'


//------

import { useDispatch } from 'react-redux'

import { setInitialProducts } from './reducers/products/productsSlice.js'

const products = [
  {
    id: 2,
    img: umbrella,
    product: umbrella2,
    name: 'Pufi RAIN',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 3,
    img: puff,
    product: puff_product,
    name: 'Pufi PUFF',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 4,
    img: cart,
    product: cart_product,
    name: 'Pufi CART',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 5,
    img: nap_1,
    product: nap,
    name: 'Pufi PUFF',
    description: 'Descripción del producto, este es un texto simulado'
  },
]

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialProducts(products))
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Products/>
      <Gallery/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
