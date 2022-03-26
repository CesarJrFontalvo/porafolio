import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

const Navbarr = () => {
  return (
    <div >
        <Navbar className='fondoNegro sticky-top ' >
  <Container fluid>
    <Navbar.Brand className="text-light" href="#">LOGO</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className="text-light nav-link" href="#home">Home</Nav.Link>
        <Nav.Link className="text-light" href="#proyectos">Proyectos</Nav.Link>
        <Nav.Link className="text-light" href="#testimonios">Testimonios</Nav.Link>
        <Nav.Link className="text-light" href="#contactos">Contactos</Nav.Link>
        
      </Nav>
     
        <Button className="text-light" variant="warning"  target="_blank" href="../archivos/CV-CesarFontalvo.pdf">Descargar currículum</Button>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Navbarr