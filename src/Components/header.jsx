import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ModalTitle } from 'react-bootstrap';

function OffcanvasExample() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 " >
          <Container fluid className='col-9'>
            <Navbar.Brand as={Link} to="/" >
              <h2 className='green-text'>
                Find.az
              </h2>
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Find.az
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
				
                <Nav className="justify-content-end flex-grow-1 pe-3">
					
					
					<Nav.Link as={Link} to="/categories">
						<div className='icon-hover'>
							<div className='d-flex justify-content-center align-items-center'> <i class="fa-brands fa-microsoft"></i></div>
							<span className='d-flex justify-content-center align-items-center'>Категории</span> 
						</div>
						
					</Nav.Link>

					<Nav.Link as={Link} to="/orders">
						<div className='d-flex justify-content-center align-items-center'> <i class="fa-solid fa-box"></i></div>
						<span className='d-flex justify-content-center align-items-center'>Заказы</span> 
					</Nav.Link>
						
					<Nav.Link as={Link} to="/liked">
						<div className='d-flex justify-content-center align-items-center'> <i class="fa-solid fa-heart"></i></div>
						<span className='d-flex justify-content-center align-items-center'>Избранные</span> 
					</Nav.Link>

					<Nav.Link as={Link} to="/card">
						<div className='d-flex justify-content-center align-items-center'><i class="fa-solid fa-cart-shopping"></i></div>
						<span className='d-flex justify-content-center align-items-center'>Корзины</span> 
					</Nav.Link>

				 
                
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;