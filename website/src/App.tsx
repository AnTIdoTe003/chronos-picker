import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Examples from './pages/Examples';
import Playground from './pages/Playground';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
