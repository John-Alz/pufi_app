import React from 'react'
import logo from '../../assets/logo.png'
import puff from '../../assets/puff.png'
import rain from '../../assets/rain.png'
import cart from '../../assets/cart.png'
import nap from '../../assets/nap.png'
import { FiChevronDown} from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {


  const { totalCount } = useSelector(state => state.cart)

  return (
    <div className='navbar'>
      <div className='logo'>
      <img className='logo_img' src={logo} alt='logo'/>
      </div>
      <div className='navigation'>
        {/*items*/}
        <div className='navigation__one'>
        <img className='img' src={puff} alt='PUFI PUFF' />
        <p>PUFI PUFF</p>
        </div>
        <div className='navigation__two'>
        <img className='img' src={rain} alt='PUFI PUFF' />
        <p>PUFI RAIN</p>
        </div>
        <div className='navigation__three'>
        <img className='img' src={cart} alt='PUFI PUFF' />
        <p>PUFI CART</p>
        </div>
        <div className='navigation__four'>
        <img className='img' src={nap} alt='PUFI PUFF' />
        <p>PUFI NAP</p>
        </div>
      </div>
      <div className='container_cuenta'>
        {/*profile*/}
        <span>MI CUENTA   <FiChevronDown style={{color: "white", fontSize: 15, }}/></span> 
        
        <span className='miCuenta'><Link className='link_compra' to='/cart'>MI COMPRA</Link></span> 
        <span className='count'>{totalCount === 0 ? "" : totalCount}</span>
        
        
      </div>
    </div>
  )
}
