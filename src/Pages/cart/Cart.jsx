import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeProductFromCart } from '../../reducers/cart/cartSlice';
import { GiClick } from 'react-icons/gi';

export default function Cart() {

    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart)

    const handleRemoveProduct = (productId) => {
      dispatch(removeProductFromCart(productId))
    }
    

  return (
    <div className='container_cart'>
      <button className='btn_back'><Link className='link_back' to="/">Volver</Link></button>
      <h1>tus compras</h1>
      <div>
      {
        productsList.length > 0 ?
                productsList.map(product => {
                    return (
                        <div className='container_product'>
                            <img src={product.product}/>
                            <p>{product.name}</p>
                            <span>{product.description}</span>
                            <button onClick={() => handleRemoveProduct(product.id)} >Borrar</button>
    
                        </div>
                    )
                }): <div><h2>No tienes productos en el carrito. <br/> Ve a para comprar <br/> <Link className='link_buy' to='/'>Haz click aqui.</Link> <br/> ❤️</h2></div>
            } 
            <div className={productsList.length > 0 ? "term_compra" : "not_term_compra"} >
            <button>Terminar compra</button>
            </div>
      </div>
    </div>
  )
}


