import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route, Router, Routes } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import Profile from './Profile';
import Goods from './Goods';
import GoodsEdit from './GoodsEdit';
import GoodsAdd from './GoodsAdd';
import Orders from './Orders';
import OrderPage from './OrderPage';
import Finance from './Finance';

function Dashboard() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='col-9'>
        <Navbar.Brand as={Link} to='/dashboard/home'>Find.az Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/goods">Goods</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/orders">Orders</Nav.Link>
            <Nav.Link as={Link} to="/dashboard/finance">Finance</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='/dashboard/settings'>Settings</Nav.Link>
            <Nav.Link as={Link} to='/'>
            Go to Shop
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className='col-9'>
        <Routes>
            <Route path='/home' element={<DashboardHome/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/goods' element={<Goods/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/orders/:id' element={<OrderPage/>} />
            <Route path='/goods/setting/change/:id' element={<GoodsEdit />} />
            <Route path='/goods/setting/add' element={<GoodsAdd />} />
            <Route path='/finance' element={<Finance />} />
        </Routes>
    </Container>
   

   
    </>
    
  );
}

export default Dashboard;