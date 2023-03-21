import React, {useState} from 'react'
import { FiArrowRight} from "react-icons/fi";
import Swal from 'sweetalert2'

import { useForm, ValidationError  } from '@formspree/react';


function validate(input){
  let errors ={}
  if(!input.email ) {
    errors.email = "¡Se requiere incluir un email!"
  } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.email)){
    errors.email = "¡Debe escribir un correo valido!"
  }
  return errors;
}

export default function Form() {

  const [state, handleSubmit] = useForm("mpzejzkz");
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState ({
    email: '',
  })

  

  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  if (state.succeeded) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Gracias por suscribirte!',
      showConfirmButton: false,
      color: '#000',
      background: '#fff;',
      timer: 2500
    })
    return;
}

function handleChange(e) {
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name]: e.target.value
  }));
  console.log(input);
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
        onChange={handleChange}
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
        {
            errors.email && (
              <small style={{ color: "red" }}>{errors.email}</small>
            )
          }
      </div>
    </div>
  )
}
