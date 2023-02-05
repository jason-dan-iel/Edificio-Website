import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Event from './pages/events';
import { useState } from 'react';


function App() {
  return (
    <div className="w-screen h-screen bg-[#807ad6] border-[#736dd4] dark:bg-[#433e96] dark:border-[#45428b]">
      <Router>
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/about' element={<About />} />
          <Route path = '/contact' element={<Contact /> } />
          <Route path = '/events' element={<Event /> } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

