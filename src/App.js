import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import Elections from './pages/Elections';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout >
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/elections" component={Elections} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>

        </Layout>
      </div>
    </Router>
  );
}

export default App;
