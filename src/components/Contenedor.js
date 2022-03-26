import React from 'react'
import Contacto from './Contacto'
import Home from './Home'
import Navbarr from './Navbarr'
import Proyectos from './Proyectos'
import Servicios from './Servicios'
import Testimonios from './Testimonios'

const Contenedor = () => {
  return (
    <div>
        <Navbarr />
         <Home />
      <Proyectos />
      <Servicios />
      <Testimonios />
      <Contacto />

    </div>
  )
}

export default Contenedor