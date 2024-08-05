 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Courses from './Components/Courses';
import About from './Components/About';
import Itservice from './Components/Itservice';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Web from './Components/Courses/Web';
import Application from './Components/Services/Application'
import Drone from './Components/Services/Drone'
import Integration from './Components/Services/Integration'
import CyberAnalysis from './Components/Services/CyberAnalysis'
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/itservice" element={<Itservice />}>
        <Route path="application" element={<Application />} />
        <Route path="drone" element={<Drone />} />
        <Route path="integration" element={<Integration />} />
        <Route path="cyberanalysis" element={<CyberAnalysis />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="web" element={<Web />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
