import React from 'react';
import ParticlesConfig from './components/particleConfig';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/home';


const App = () => {
  return (
    <div>
      <ParticlesConfig />
      <Router>
        <Routes>
          <Route path = '/' element={<Home />} />
        </Routes>
      </Router>

    </div>



  );
};

export default App
