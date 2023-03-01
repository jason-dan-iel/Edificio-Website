import React from "react";
import AboutUs from "../components/aboutus";
import EventSection from "../components/eventSection";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
        <main>
            <Navbar />
            <AboutUs />
            <EventSection />
            <Footer />
        </main>
    )
}