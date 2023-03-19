import React from 'react'
import { FiArrowRight} from "react-icons/fi";
import Swal from 'sweetalert2'

import { useForm, ValidationError  } from '@formspree/react';


export default function Form() {

  const [state, handleSubmit] = useForm("mpzejzkz");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  if (state.succeeded) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Thanks for joining!',
      showConfirmButton: false,
      color: '#000',
      background: '#fff;',
      timer: 2500
    })
    return;
}

   
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
        <form onSubmit={handleSubmit}>
        <input
        type="text"
        id="email" 
        name="email"
        placeholder='Ingresa tu email'
        required
        />
        <button type='submit' className='sent' disabled={state.submitting}>
        <FiArrowRight className='sent_arrow'/>
        </button>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </form>
      </div>
    </div>
  )
}
