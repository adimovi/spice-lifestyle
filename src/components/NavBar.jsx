import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
    <div className='text-center d-flex  flex-column container-fluid'>
      <div className="container py-4 d-flex justify-content-around d-lg-block d-none">
      <Link to="/" className='big-title'>Spice Lifestyle</Link>
      <Link to='/contact' className='contact'>Contact Barry</Link>
      </div>
      <Navbar expand="lg">
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/bbq" className='nav-link'>BBQ</Link>
            <Link to="/coworking" className='nav-link'>CoWorking</Link>
            <Link to="/services" className='nav-link'>Professional Services</Link>
            <Link to="/village" className='nav-link'>CoLiving Villages</Link>
            <Link to="/grocery" className='nav-link'>Grocery</Link>
            <Link to="/fashion" className='nav-link'>Fashion</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    </>
  );
}

export default NavBar;