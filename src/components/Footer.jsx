import React from 'react';
import { Link } from "react-router-dom";



export function Footer() {

return (
<>
<footer style = {{backgroundColor: "var(--secondary-color)"}}>
  <div className="container py-5 text-white text-center">
    <div className="row">
      <div className="col-lg-4 col-12 align-self-center">
        <ul>
          <li><Link to="/spice-lifestyle/bbq">Spice BBQ</Link></li>
          <li><Link to="/spice-lifestyle/coworking">Spice CoWorking</Link></li>
          <li><Link to="/spice-lifestyle/services">Spice Professional Services</Link></li>
          <li><Link to="/spice-lifestyle/village">Spice CoLiving Villages</Link></li>
          <li><Link to="/spice-lifestyle/grocery">Spice Grocery</Link></li>
          <li><Link to="/spice-lifestyle/fashion">Spice Fashion</Link></li>
        </ul>
      </div>
      <div className="col-lg-4 col-12 align-self-center">
        <ul>
          <li><Link to="/spice-lifestyle/contact">Contact Us</Link></li>
          <li><Link to="/spice-lifestyle/privacy">Privacy Policy</Link></li>
          <li><Link to="/spice-lifestyle/cookie">Cookie Policy</Link></li>
          <li><Link to="/spice-lifestyle/terms">Terms and Conditions</Link></li>
        </ul>
      </div>
    
      <div className="col-lg-4 col-12 align-self-center">
        <img src="/imgs/fb.png" className="social-img d-block mx-auto" alt=''/>
        <img src="/imgs/insta.png" className="social-img d-block mx-auto" alt=''/>   
        <img src="/imgs/tw.png" className="social-img d-block mx-auto" alt=''/>         
        <img src="/imgs/ytb.png" className="social-img d-block mx-auto" alt=''/>
        <img src="/imgs/pin.png" className="social-img d-block mx-auto"alt=''/>
      </div>
    </div>
    <p className="mt-5 text-center copy">
      Copyright <Link to="/spice-lifestyle/" className='bold'>Spice Lifestyle</Link> 2024
    </p>
  </div>
</footer>
</>
);

}


export default Footer;