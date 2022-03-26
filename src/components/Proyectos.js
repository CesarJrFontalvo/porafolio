import React from 'react'
import { Button } from 'react-bootstrap'

const Proyectos = () => {
    // const navigate = useNavigate();
    // const handleProyec = () => {
        
    //     navigate("https://cesarjrfontalvo.github.io/portafolio-freeCodeCamp/")
    // }
  return (
    <div id="proyectos">
        <div className='d-flex'>
            <div className='m-5'>
                <h3>Parece magia, funciona</h3>
                <h3>con código</h3>
            </div>
            <div className='mt-5'>
            <p>A lo largo de mi carrera como Frontend, he 
            </p>
            <p>
                 tenido el privilegio de trabajar en proyectos
            </p>
            <p>
                 retadores e increibles.
            </p>
            </div>
        </div>


        <div className='m-5'>
            <div className='fondoImagen'>
               
                <div className='box '>
                    <h3>Block Master</h3>
                    <h5 className="mt-4">Block Master es una plataforma para ver peliculas</h5>
                    <h5>en la cualpuedes buscar tu pelicula favorita</h5>
                    <h5>y filtrar por la mejor valorada</h5>

                    <Button  className="mt-3 me-3" variant="warning" target="_blank" >Ver proyecto completo</Button>{' '}
                    <Button className="mt-3" variant="outline-warning">Ver código</Button>
                  {/* <NavLink to="https://cesarjrfontalvo.github.io/portafolio-freeCodeCamp/" replace>  
                   </NavLink>  */}
                </div>
            </div>
            <div className='d-flex '>
                <div className='fondoImagen2'>
                    <div className='box2 mt-5'>
                        <h5>Guajalotas</h5>
                        <p className="">Block Master es una plataforma para ver peliculas</p>
                        <p>en la cualpuedes buscar tu pelicula favorita</p>
                        <p>y filtrar por la mejor valorada</p>

                        <Button  className="mt-3 me-3" variant="warning" target="_blank" >Ver proyecto completo</Button>{' '}
                        <Button className="mt-3" variant="outline-warning">Ver código</Button>
                    
                    </div>
                </div>  

                <div className='fondoImagen3'>
                <div className='box2 mt-5'>
                        <h5>Guajalotas</h5>
                        <p className="">Block Master es una plataforma para ver peliculas</p>
                        <p>en la cualpuedes buscar tu pelicula favorita</p>
                        <p>y filtrar por la mejor valorada</p>

                        <Button  className="mt-3 me-3" variant="warning" target="_blank" >Ver proyecto completo</Button>{' '}
                        <Button className="mt-3" variant="outline-warning">Ver código</Button>
                    
                    </div>
                </div>
            </div>
                <Button variant="outline-secondary">Ver más proyectos ➡</Button>{' '}
        </div>
    </div>
  )
}

export default Proyectos