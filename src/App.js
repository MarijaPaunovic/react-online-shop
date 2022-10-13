
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Cart from './component/Cart/Cart';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
