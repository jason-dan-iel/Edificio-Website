import React from "react";
import AboutUs from "../components/aboutus";
import EventSection from "../components/eventSection";
import Footer from "../components/footer";
import Hero from "../components/hero";

export default function HomePage(){
    return (
        <main>

            {/* <ParticlesConfig /> */}
            <Hero />
            <AboutUs />
            <EventSection />
            <Footer />
        </main>
    )
}