import React from "react";
import ParticlesConfig from "./components/particleConfig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam";
import LoginPage from "./pages/Login";
import Navbar from "./components/navbar";
import SignupPage from "./pages/Signup";
import Events from "./pages/Events";
import Eureka from "./Events/eureka";
import Pixivillis from "./Events/pixivillis";
import Sympossium from "./Events/sympossium";
import Cadacetto from "./Events/cadacetto";
import Civiq from "./Events/civiq";
import BridgeMaking from "./Events/bridgemaking";
import Partbg from "./components/particles";
import ScrolltoTop from "./components/ScrollToTop";
import Profiles from "./components/profiles";

const App = () => {
  return (
    <div className="font-martianmono" id="back_color">
      <Router>
        <ScrolltoTop />

        <Navbar />
        {/* <ParticlesConfig/> */}
        <Partbg />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<Profiles />} />

          {/* Events Routing */}
          <Route path="/eureka" element={<Eureka />} />
          <Route path="/pixivils" element={<Pixivillis />} />
          <Route path="/symposium" element={<Sympossium />} />
          <Route path="/cadecetto" element={<Cadacetto />} />
          <Route path="/civiq" element={<Civiq />} />
          <Route path="/bridgemaking" element={<BridgeMaking />} />
        </Routes>
        {/* </ScrolltoTop> */}
      </Router>
    </div>
  );
};

export default App;
