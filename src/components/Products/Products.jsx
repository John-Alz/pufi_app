import React from 'react'
import { FiChevronRight} from "react-icons/fi";
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addProductToCart, removeProductFromCart } from '../../reducers/cart/cartSlice';
import { setSelectProductId } from '../../reducers/products/productsSlice';

export default function Products() {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.products)
  const { productsList } = useSelector(state => state.cart)

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId)
    if(productsList.find(pdt => pdt.id === productId)){
      dispatch(removeProductFromCart(productId))
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Se borro del carrito',
        showConfirmButton: false,
        color: '#000',
        background: '#fff;',
        timer: 1000
      })
    } else {
      dispatch(addProductToCart(product))
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se añadio al carrito!',
        showConfirmButton: false,
        color: '#000',
        background: '#fff;',
        timer: 1000
      })
    }
  }

  // const productChange = productsList.find(product => product.id === product.id) 

  const handleProductClick = (productId) => {
    dispatch(setSelectProductId(productId))
  }


  console.log(products);

  return (
    <div className='product_container'> 
    {
        products.map((product, index) => {
          if(index%2 !== 0) {
            return (
              <div key={product.id} className="product">
                <Detail product={product.product} name={product.name} id={product.id} click={() => handleProductClick(product.id)} />
                <Imagen img={product.img} name={product.name} onClick={() => handleAddOrRemoveProduct(product.id)} value={productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Shop"}/>
              </div>
            )
          }
          return <div key={product.id} className="product">
            <Imagen img={product.img} name={product.name} onClick={() => handleAddOrRemoveProduct(product.id)} value={productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Shop"}/>
            <Detail product={product.product} name={product.name} id={product.id} click={() => handleProductClick(product.id)}/>
          </div>
        })
      }
      
    </div>
  )
}

const Imagen = ({img, name, onClick, value}) => {
  return (
  <div className='container_product'>
  <img className='img_'  src={img} alt={name}/>
  <button
   onClick={onClick}>
    {
      value 
    }
   </button>
  </div>
  )
}
const Detail = ({product, name, id, click}) => {
  return (
    <div className='container_description'>
    <div className='product-description'>
    <img  src={product} alt='PUFI PUFF'/>
    <h1>{name}</h1>
    <hr/>
    <p>Descripción del producto. Este es <br/> un texto simulado</p>
    <Link to={`/detail/${id}`}>
    <a onClick={click}><FiChevronRight/> VER MAS</a>
    </Link>
    </div>
    </div>
  )

  }

