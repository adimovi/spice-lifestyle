import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavCollapse = () => setExpanded(!expanded);

  return (
    <>
      <ScrollToTopButton />
      <div className='text-center d-flex  flex-column container-fluid'>
        <div className="container py-4 d-flex justify-content-around d-lg-block d-none ">
          <Link to="/" className='big-title position-relative'>Spice Lifestyle</Link>
        </div>
        <Link to='/contact' className='contact position-absolute d-lg-block d-none'>Contact Barry</Link>
        <Navbar expand="lg" expanded={expanded}>
          <h3 className='text-white ms-5 my-auto d-lg-none d-block'>Spice Lifestyle</h3>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavCollapse} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" onClick={() => setExpanded(false)}>
              <Link to="/bbq" className='nav-link'>BBQ</Link>
              <Link to="/coworking" className='nav-link'>CoWorking</Link>
              <Link to="/services" className='nav-link'>Professional Services</Link>
              <Link to="/village" className='nav-link'>CoLiving Villages</Link>
              <Link to="/grocery" className='nav-link'>Grocery</Link>
              <Link to="/fashion" className='nav-link'>Fashion</Link>
              <Link to='/contact' className='nav-link d-lg-none d-block'>Contact Barry</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default NavBar;
