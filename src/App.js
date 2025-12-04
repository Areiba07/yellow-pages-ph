import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Results from './components/Results';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/:category" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
