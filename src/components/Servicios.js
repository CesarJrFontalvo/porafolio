import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Servicios = () => {
    return (
        <div className=' fondoRojo p-5' id="servicios">
            <div >

                    <h1>Servicios</h1>
             <Container className='d-flex'>

                <div className='me-5'>

                    <h3 className='mt-5'>Diseño</h3>
                    <ul className='list-group'>
                        <li >Experiencia de usuario</li>
                        <li >Interfaz de usuario</li>
                        <li >Aplicaciones web</li>
                        <li >Pruebas de conceptos</li>
                    </ul>
                    <Button className="text-warning mt-3"variant="dark">Ver servicios de diseño ➡</Button>{' '}
                </div>

                <div className='me-5'>

                    <h3 className='mt-5'>Desarrollo</h3>
                    <ul className='list-group'>

                        <li >Aplicaciones moviles</li>
                        <li >Sitios web</li>
                        <li >Aplicaciones web progresivas</li>
                       
                    </ul>
                    <Button className="text-warning mt-3"variant="dark">Ver servicios de desarrollo ➡</Button>{' '}
                </div>
                <div>

                    <h3 className='mt-5'>Diseño</h3>
                    <ul className='list-group'>
                        <li>Marca</li>
                        <li >Identidad de marca</li>
                        <li >Estrategia de marca</li>
                    
                    </ul>
                    <Button className="text-warning mt-3" variant="dark">Ver servicios de marca ➡</Button>{' '}
                </div>
           </Container>
            </div>
           
        </div>
    )
}

export default Servicios