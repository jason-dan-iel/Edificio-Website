import React from "react";
import AboutUs from "../components/aboutus";
import Footer from "../components/footer";
import Hero from "../components/hero";

export default function HomePage(){
    return (
        <main>

            {/* <ParticlesConfig /> */}
            <Hero />
            <AboutUs />
            <Footer />
        </main>
    )
}