import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className='text-center d-flex  flex-column container-fluid'>
      <div className="container py-4 d-flex justify-content-around">
      <Link to="/" className='big-title'>Spice Lifestyle</Link>
      <Link to='/spice-lifestyle/contact' className='contact'>Contact Barry</Link>
      </div>
      <Navbar expand="lg">
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/spice-lifestyle/bbq" className='nav-link'>BBQ</Link>
            <Link to="/spice-lifestyle/coworking" className='nav-link'>CoWorking</Link>
            <Link to="/spice-lifestyle/services" className='nav-link'>Professional Services</Link>
            <Link to="/spice-lifestyle/village" className='nav-link'>CoLiving Villages</Link>
            <Link to="/spice-lifestyle/grocery" className='nav-link'>Grocery</Link>
            <Link to="/spice-lifestyle/fashion" className='nav-link'>Fashion</Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
    </>
  );
}

export default NavBar;