import React from "react";
import AboutUs from "../components/aboutus";
import EventSection from "../components/eventSection";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import Partbg from "../components/particles"
import ParticlesConfig from "../components/particleConfig";

export default function HomePage(){
    return (
        <main>
            <Partbg />
            {/* <ParticlesConfig /> */}
            <Navbar />
            <AboutUs />
            <EventSection />
            <Footer />
        </main>
    )
}