import React from 'react'

const Home = () => {
  return (
    <div id ="home"className='d-flex fondoNegro'>
        <div className='m-3 mt-5'>

        <h1 className='colorBlanco'>¡Hola a todos!  </h1>
        <h1 className='colorBlanco mb-5 '>Soy César Fontalvo</h1>
        <h4 className='colorGris'>Developer que le encanta implementar diseños que </h4>
        <h4 className='colorGris'>inspiran y atraen a las personas.</h4>
        <img className='mt-5' id="imgFlecha"  src="https://res.cloudinary.com/difxvqjj3/image/upload/v1648235979/freeCodeCamp/arrow-down_wklvqz.png" alt="flecha" />
        </div>

        <div>
        <img className="m-5" id='imgperfil' src="https://res.cloudinary.com/difxvqjj3/image/upload/v1648072116/freeCodeCamp/foto_ru4mkp.jpg" alt="César Fontalvo" />

        </div>
    </div>
  )
}

export default Home