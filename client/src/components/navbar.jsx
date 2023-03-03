import React from "react"; 
import logo from '../assets/EdificioLogo.png' 
import { NavLink } from "react-router-dom";

export default function Navbar(){
    function addActiveStyle(){
        console.log("hello world")
    }
    return(
        <nav className="h-1/6 fixed navbar w-screen px-20 bg-transparent text-2xl text-white">
            <ul className="flex justify-between items-center">
                <section>
                    <img src={logo} alt="" className="h-full w-20"/>
                </section>
                <section>
                    <ul className="flex items-center">
                        <li><NavLink to="/" className="px-4" >Home</NavLink> </li>
                        <li><NavLink to="/events" className="px-4" >Events</NavLink> </li>
                        <li><NavLink to="/ourteam" className="px-4" >Our Team</NavLink> </li>
                        <li><NavLink to="/login" className="px-4" >Log In</NavLink> </li>
                        <li><NavLink to="/signup" className="px-4" >Register</NavLink> </li>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}