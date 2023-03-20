import React from 'react'
import umbrella from '../../assets/umbrella.jpeg'
import umbrella2 from '../../assets/umbrella_product.jpg'
import puff_product from '../../assets/puff_product4.jpg'
import puff from '../../assets/puff_2_2.jpg'
import cart from '../../assets/cart2_2.jpg'
import cart_product from '../../assets/cart_product2.jpg'
import nap from '../../assets/napppp.jpg'
import nap_1 from '../../assets/nap_1_1.jpg'
import { FiChevronRight} from "react-icons/fi";

import { useSelector } from 'react-redux'


export default function Products() {

  const { products } = useSelector(state => state.products)


  console.log(products);

  return (
    <div className='product_container'> 
    {
        products.map((product, index) => {
          if(index%2 !== 0) {
            return (
              <div key={product.id} className="product">
                <Detail product={product.product} name={product.name} />
                <Imagen img={product.img} name={product.name}/>
              </div>
            )
          }
          return <div key={product.id} className="product">
            <Imagen img={product.img} name={product.name} />
            <Detail product={product.product} name={product.name} />
          </div>
        })
      }
      
    </div>
  )
}

const Imagen = ({img, name}) => {
  return (
  <div className='img_umbrella'>
  <img  src={img} alt={name}/>
  <button>SHOP</button>
  </div>
  )
}
const Detail = ({product, name}) => {
  return (
    <div className='container_description'>
    <div className='product-description'>
    <img  src={product} alt='PUFI PUFF'/>
    <h1>{name}</h1>
    <hr/>
    <p>Descripción del producto. Este es <br/> un texto simulado</p>
    <a><FiChevronRight/> VER MAS</a>
    </div>
    </div>
  )

  }

