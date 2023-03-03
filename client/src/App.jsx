import React from 'react';
import ParticlesConfig from './components/particleConfig';
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Home from './pages/home';
import OurTeam from './pages/OurTeam';
import Register from './pages/OurTeam copy';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import Partbg from './components/particles';
import SignupPage from './pages/Signup';
import Events from './pages/Events';

const App = () => {
  return (
    <div >
      <ParticlesConfig />
      {/* <Partbg/> */}
      <Router>
      <Navbar />
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path = '/events' element={< Events/>} />
          <Route path = '/ourteam' element={<OurTeam/>} />
          <Route path = '/login' element={<LoginPage/>} />
          <Route path = '/signup' element={<SignupPage/>} />
        </Routes>
      </Router>

    </div>



  );
};

export default App;
