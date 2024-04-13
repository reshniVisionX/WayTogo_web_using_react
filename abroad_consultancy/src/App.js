import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/home';
import NavBar from './components/navbar';
import Trending from './components/trending';
import Destinations from './components/destinations';
import Resources from './components/resources';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';
import Login from './components/login';
import SignUp from './components/Register';
import CRScalculator from './components/Calculator/CRScalculator';
import PNPfinder from './components/Calculator/PNPfinder';
import PRCalculator from './components/Calculator/PRCalculator';
import Bot from './components/bot';
import Admin from './components/AdminPage/admin';
import Success from './components/programs/success';
import Updated from './components/programs/updated';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/CRScalculator" element={<CRScalculator/>}/>
          <Route path="/PNPfinder" element={<PNPfinder/>}/>
          <Route path="/PRcalculator" element={<PRCalculator/>}/>
          <Route path="/bot" element={<Bot/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/resources/programs/:selectedProgram" element={<Success/>}/>
          <Route path="/resources/programs/:selectedProgram" element={<Updated/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
