import React, { useEffect } from 'react'

import Home from './Componets/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portpolio from './Componets/Portpolio'
import Header from './Componets/Header'
import Resum from './Componets/Resum'
import Contact from './Componets/Contact'
import About from './Componets/About'
import Aos from 'aos'
import AOS from "aos";
import "aos/dist/aos.css";


export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  
  return (
   <>
   <BrowserRouter>
   <Routes>
    
    <Route path="/" element={<Header/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/portpolio" element={<Portpolio/>}></Route>
    <Route path="/resum" element={<Resum/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    
   </Routes>
   </BrowserRouter>
   
  
   </>
  )
}
