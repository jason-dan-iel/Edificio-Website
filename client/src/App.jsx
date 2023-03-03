import React from 'react';
import ParticlesConfig from './components/particleConfig';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/home';
import OurTeam from './pages/OurTeam';
import Register from './pages/OurTeam copy';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Partbg from './components/particles';

const App = () => {
  return (
    <div>
      <ParticlesConfig />
      {/* <Partbg/> */}
      <Router>
      <Navbar />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/events' element={< Event/>} />
          <Route path = '/ourteam' element={<OurTeam/>} />
          <Route path = '/login' element={<Login/>} />
          <Route path = '/register' element={<Register/>} />
        </Routes>
      </Router>

    </div>



  );
};

export default App;
