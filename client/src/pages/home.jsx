import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "./about";



export default function Home(){
    return (
        <div>
            <HeroSection />    
            <About />
        </div>
    );
};