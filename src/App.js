import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:tourId" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
