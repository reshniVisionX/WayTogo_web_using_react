import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/home';
import NavBar from './components/navbar';
import Trending from './components/trending';
import Destinations from './components/destinations';
import Resources from './components/resources';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
