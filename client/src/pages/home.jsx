import React from "react";
import Navbar from "../components/Navbar";
import Foot from "../components/Footer";
import EventCard from "../components/EventCard";


export default function Home(){
    return (
        <div>
            <EventCard eventName="Bridge Making" description="Bridge Making is a competition where the participants have to make a bridge using the given materials. The bridge should be able to hold the maximum weight."/>            
        </div>
    );
};