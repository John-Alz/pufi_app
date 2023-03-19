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

export default function Products() {
  return (
    <div> 
      <div className='product_container'>
      <div className='img_umbrella'>
      <img  src={umbrella} alt='PUFI PUFF'/>
      <button>SHOP</button>
      </div>
      <div className='product-description'>
      <img  src={umbrella2} alt='PUFI PUFF'/>
      <h1>Pufi RAIN</h1>
      <hr/>
      <p>Descripción del producto. Este es <br/> un texto simulado</p>
      <a><FiChevronRight/> VER MAS</a>
      </div>
      </div>
      <div className='product_container'>
      <div className='product-description'>
      <img  src={puff_product} alt='PUFI PUFF'/>
      <h1>Pufi PUFF</h1>
      <hr/>
      <p>Descripción del producto. Este es <br/> un texto simulado</p>
      <a><FiChevronRight/> VER MAS</a>
      </div>
      <div className='img_umbrella'>
      <img  src={puff} alt='PUFI PUFF'/>
      <button>SHOP</button>
      </div>
      </div>
      <div className='product_container'>
      <div className='img_umbrella'>
      <img  src={cart} alt='PUFI PUFF'/>
      <button>SHOP</button>
      </div>
      <div className='product-description'>
      <img  src={cart_product} alt='PUFI PUFF'/>
      <h1>Pufi RAIN</h1>
      <hr/>
      <p>Descripción del producto. Este es <br/> un texto simulado</p>
      <a><FiChevronRight/>  VER MAS</a>
      </div>
      </div>
      <div className='product_container'>
      <div className='product-description'>
      <img  src={nap} alt='PUFI PUFF'/>
      <h1>Pufi PUFF</h1>
      <hr/>
      <p>Descripción del producto. Este es <br/> un texto simulado</p>
      <a><FiChevronRight/>  VER MAS</a>
      </div>
      <div className='img_umbrella'>
      <img  src={nap_1} alt='PUFI PUFF'/>
      <button>SHOP</button>
      </div>
      </div>
    </div>
  )
}
