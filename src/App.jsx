import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;