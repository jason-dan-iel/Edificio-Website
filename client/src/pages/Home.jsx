import React from "react";
import AboutUs from "../components/aboutus";
import EventSection from "../components/eventSection";
import Footer from "../components/footer";

export default function Home(){
    return (
        <main>
            <AboutUs />
            <EventSection />
            <Footer />
        </main>
    )
}