import React from "react";
import AboutUs from "../components/aboutus";
import EventSection from "../components/eventSection";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
        <main>
            <Hero />
            <AboutUs />
            <EventSection />
            <Footer />
        </main>
    )
}