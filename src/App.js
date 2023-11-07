import React from 'react';
import './App.css';
import './styles/main.scss'
import Header from './components/Header'
import PageNotFound from './components/PageNotFound'
import Interests from './components/Interests'
import About from './components/About'
import Projects from './components/Experience'
import Home from './components/Home';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path = '/interests' element={<Interests />} />
        <Route path = '/about' element={<About />} />
        <Route path = '/projects' element={<Projects/>} />
        <Route path ='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


