import {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

import ProductsDetail from './Pages/ProductDetail/ProductsDetail'

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

import { setInitialDetail, setInitialProducts } from './reducers/products/productsSlice.js'
import Cart from './Pages/cart/cart'
// import { addProductToCart } from './reducers/cart/cartSlice'


const products = [
  {
    id: 1,
    img: umbrella,
    product: umbrella2,
    name: 'Pufi RAIN',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 2,
    img: puff,
    product: puff_product,
    name: 'Pufi PUFF',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 3,
    img: cart,
    product: cart_product,
    name: 'Pufi CART',
    description: 'Descripción del producto, este es un texto simulado'
  },
  {
    id: 4,
    img: nap_1,
    product: nap,
    name: 'Pufi NAP',
    description: 'Descripción del producto, este es un texto simulado'
  },
]


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialProducts(products))
    // dispatch(addProductToCart(products))
    dispatch(setInitialDetail(products))
  }, []);


  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/detail/:id" element={<ProductsDetail/>}/>
    </Routes>
    </div>
  )
}

export default App
