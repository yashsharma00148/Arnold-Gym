import React from 'react'
import Home from './components/home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/about'
import Trainers from './components/trainers'
import Faculties from './components/faculties'
import Contact from './components/contact'
import Locations from './components/locations'
import "./App.css"



export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/trainers" element={<Trainers/>} />
        <Route path="/faculties" element={<Faculties/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/locations" element={<Locations/>} />
      </Routes>
      
      
      </BrowserRouter>
    </div>
  )
}
