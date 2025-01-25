import React from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './page/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import EmployeeName from './components/employee/EmployeeName';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar/>
      <div className='sidebar'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/employee" element={<EmployeeName/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
