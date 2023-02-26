import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

function HeroSection(){
    return(
        <main className="w-screen h-screen flex flex-col">
            <Navbar />
            <Hero />
        </main>
    )
};

export default HeroSection;