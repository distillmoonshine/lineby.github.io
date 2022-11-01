import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Create from './pages/Create';
import About from './pages/About';
import Tech from './pages/Tech';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/tech' element={<Tech />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
