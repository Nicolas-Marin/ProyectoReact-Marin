import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary colorbg">
      <Container>
        <Navbar.Brand href="#home"><CartWidget/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Arma tu PC</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <NavDropdown title="Componentes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Componenetes de PC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Perifericos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Monitores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Almacenamiento Portatil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Impresion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Impresion 3D</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Conectividad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Oficinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">Streaming</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.12">Sillas y Butacas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.13">Desarrollo Web</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.14">Multimedia y Entretenimiento</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;