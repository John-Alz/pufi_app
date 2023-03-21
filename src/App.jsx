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

import { setInitialProducts } from './reducers/products/productsSlice.js'
import Cart from './Pages/cart/cart'
// import { addProductToCart } from './reducers/cart/cartSlice'


const products = [
  {
    id: 1,
    img: umbrella,
    product: umbrella2,
    name: 'Pufi RAIN',
    description: 'Descripción del producto, este es un texto simulado',
    description_2: 'Apertura fácil y rápida Con el sistema de apertura automática, podrás protegerte de la lluvia en un instante. A través de un botón el paraguas se abrirá instantáneamente proporcionando reparo y seguridad.'
  },
  {
    id: 2,
    img: puff,
    product: puff_product,
    name: 'Pufi PUFF',
    description: 'Descripción del producto, este es un texto simulado',
    description_2: 'Espectacular diseño de la Mejor Marca "Biny Martin", comodo, versatil, adaptable a cualquier espacio dentro o fuera de la casa. El textil tiene la capacidad de resistir el trato intensivo y repele liquidos.',
  },
  {
    id: 3,
    img: cart,
    product: cart_product,
    name: 'Pufi CART',
    description: 'Descripción del producto, este es un texto simulado',
    description_2: 'La bolsa inteligente está diseñada para que sea fácil y conveniente de usar, pues la puedes llevar contigo a todos lados gracias a su gran retractilidad semiautomática y poder almacenar tus compras improvisadas o planeadas.'
  },
  {
    id: 4,
    img: nap_1,
    product: nap,
    name: 'Pufi NAP',
    description: 'Descripción del producto, este es un texto simulado',
    description_2: 'Plumón blanco de lujo y plumas: la almohada Lincove de plumón blanco y plumas, ahora en una versión de mini almohada con nuestra famosa comodidad y esponja. Lujoso plumón canadiense blanco que mantiene su forma y loft para una máxima comodidad para los niños..'
  },
]


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialProducts(products))
    // dispatch(setInitialDetail(products))
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
