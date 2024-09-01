import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Skills from '../components/Skills/Skills';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/skills" element={<Skills />} /> */}
    </Routes>
  );
};

export default PublicRoutes;
