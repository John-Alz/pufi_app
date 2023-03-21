import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addProductToCart, removeProductFromCart } from '../../reducers/cart/cartSlice';
import Swal from 'sweetalert2'

export default function ProductDetail() {

  const selectedProductId = useSelector(state => state.products.selectedId)

  const product = useSelector(state => state.products.products.find(item => item.id === selectedProductId));

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


  return (
    <div className='bodyDog'>
      <div className='dogdetail'>
      <Link className='linkDet' to='/'>X</Link>
      {product && (
        <>
        <div>
        <img src={product.product} alt={product.name} />
       </div>
        <div>
          <h1>{product.name}</h1>
          <p>{product.description_2}</p>
          <button onClick={() => handleAddOrRemoveProduct(product.id)}>
          {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
          </button>
          {/* <img src={product.product} alt={product.name} /> */}
        </div>
        </>
      )}
    </div>
    </div>
  )
}
