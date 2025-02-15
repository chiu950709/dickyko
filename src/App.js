import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import PageNotFound from './components/404NotFound';
import './App.css';

   function App() {
     return (
    <Router>
      <div class="app-container">
        <div class="header">
          <Header />
        </div>

        <div class="main-content">
          <div class="sidebar">
            <Sidebar />
          </div>

          <div class="content">
            <Routes>
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*"element={<PageNotFound />}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
     );
   }

   export default App;
