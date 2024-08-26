import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Elections from './pages/Elections';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Four04 from './pages/Four04';
import CodeOfConduct from './pages/CodeOfConduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/elections" element={<Elections/>} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
