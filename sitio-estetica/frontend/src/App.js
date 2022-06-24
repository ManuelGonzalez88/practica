import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Servicio from './pages/Servicio';
import Promos from './pages/Promos';
import Contacto from './pages/Contacto';


function App() {
  return (
    <div className='App'>
      <Header />

      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='Servicio' element={<Servicio />} />;
          <Route path='Promos' element={<Promos />} />;
          <Route path='Contacto' element={<Contacto />} />;

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>

  );
}

export default App;
