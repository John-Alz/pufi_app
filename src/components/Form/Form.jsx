import React from 'react'
import { FiArrowRight} from "react-icons/fi";

export default function Form() {
  return (
    <div>
      <div className='container_newsletter'>
      <p>NEWSLETTER</p>
      </div>
      <div className='container_suscribe'>
      <h1>SUSCRIBETE</h1>
      </div>
      <div className='container_paragrah'>
      <p>Y enterate de todas la navovedades</p>
      </div>
      <div className='container_form'>
        <form>
        <input
        type="email"
        placeholder='Ingresa tu email'
        required
        />
        <button type='submit' className='sent'>
        <FiArrowRight className='sent_arrow'/>
        </button>
        </form>
      </div>
    </div>
  )
}
