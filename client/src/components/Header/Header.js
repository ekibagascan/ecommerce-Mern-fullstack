import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' expand='lg' variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Localo</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav className='ml-auto'>
              <Nav.Link href=' /sign'>
                <i className='fa fa-user'></i> Sign In
              </Nav.Link>
              <Nav.Link href='/cart'>
                <i className='fa fa-shopping-cart'></i> Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
