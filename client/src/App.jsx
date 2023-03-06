import React from 'react';
import ParticlesConfig from './components/particleConfig';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/home';
import OurTeam from './pages/OurTeam';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import SignupPage from './pages/Signup';
import Events from './pages/Events';
import Eureka from './Events/eureka';
import Pixivillis from './Events/pixivillis';
import Sympossium from './Events/sympossium';
import Cadacetto from './Events/cadacetto';
import Civiq from './Events/civiq';
import BridgeMaking from './Events/bridgemaking';
import Partbg from './components/particles';

const App = () => {
  return (
    <div className=''>
      {/* <ParticlesConfig /> */}
      <Router>
      <Navbar />
      <Partbg />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/events' element={< Events/>} />
          <Route path = '/ourteam' element={<OurTeam/>} />
          <Route path = '/login' element={<LoginPage/>} />
          <Route path = '/signup' element={<SignupPage/>} />

          {/* Events Routing */}
          <Route path = '/eureka' element={< Eureka/>} />
          <Route path = '/piccivils' element={<Pixivillis/>} />
          <Route path = '/symposium' element={<Sympossium/>} />
          <Route path = '/cadacetto' element={<Cadacetto/>} />
          <Route path = '/civiq' element={<Civiq/>} />
          <Route path = '/bridgemaking' element={<BridgeMaking/>} />
        </Routes>
      </Router>

    </div>



  );
};

export default App;
