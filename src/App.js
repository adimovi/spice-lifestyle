
import  NavBar  from './components/NavBar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Bbq from './pages/Bbq';
import CoWorking from './pages/Coworking';
import Village from './pages/Village';
import Grocery from './pages/Grocery';
import Fashion from './pages/Fashion';
import Services from './pages/Services';
import NoPage from './pages/NoPage';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <>
   <Router>
        <NavBar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/spice-lifestyle/" element={<Home/>} />
          <Route path="/spice-lifestyle/bbq" element={<Bbq/>} />
          <Route path="/spice-lifestyle/coworking" element={<CoWorking/>} />
          <Route path="/spice-lifestyle/services" element={<Services/>} />
          <Route path="/spice-lifestyle/village" element={<Village/>} />
          <Route path="/spice-lifestyle/grocery" element={<Grocery/>} />
          <Route path="/spice-lifestyle/fashion" element={<Fashion/>} />
          <Route path="/spice-lifestyle/contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
