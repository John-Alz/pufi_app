import React from 'react'
import { FiChevronRight} from "react-icons/fi";

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addProductToCart, removeProductFromCart } from '../../reducers/cart/cartSlice';


export default function Products() {

  const dispatch = useDispatch()

  const { products } = useSelector(state => state.products)
  const { productsList } = useSelector(state => state.cart)

  const handleAddOrRemoveProduct = (productId) => {
    const product = products.find(product => product.id === productId)
    if(productsList.find(pdt => pdt.id === productId)){
      dispatch(removeProductFromCart(productId))
    } else {
      dispatch(addProductToCart(product))
    }
  }


  console.log(products);

  return (
    <div className='product_container'> 
    {
        products.map((product, index) => {
          if(index%2 !== 0) {
            return (
              <div key={product.id} className="product">
                <Detail product={product.product} name={product.name} id={product.id}  />
                <Imagen img={product.img} name={product.name} onClick={() => handleAddOrRemoveProduct(product.id)}/>
              </div>
            )
          }
          return <div key={product.id} className="product">
            <Imagen img={product.img} name={product.name} onClick={() => handleAddOrRemoveProduct(product.id)}/>
            <Detail product={product.product} name={product.name} id={product.id} />
          </div>
        })
      }
      
    </div>
  )
}

const Imagen = ({img, name, onClick}) => {
  return (
  <div className='container_product'>
  <img className='img_'  src={img} alt={name}/>
  <button
   onClick={onClick}>
    SHOP
   </button>
  </div>
  )
}
const Detail = ({product, name, id}) => {
  return (
    <div className='container_description'>
    <div className='product-description'>
    <img  src={product} alt='PUFI PUFF'/>
    <h1>{name}</h1>
    <hr/>
    <p>Descripción del producto. Este es <br/> un texto simulado</p>
    <Link to={`/detail/${id}`}>
    <a><FiChevronRight/> VER MAS</a>
    </Link>
    </div>
    </div>
  )

  }

