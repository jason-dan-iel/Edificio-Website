import React from "react"; 
import { NavLink } from "react-router-dom";

export default function Navbar(){
    function addActiveStyle(){
        console.log("hello world")
    }
    return(
        <nav className=" fixed navbar w-screen px-20 text-2xl text-white bg-[#133661] ">
            <ul className="flex justify-between items-center">
                <section>
                    <img src="/logo_l.png" alt="" className="h-16 w-16"/>
                </section>
                <section>
                    <ul className="flex items-center mobile:hidden">
                        <li><NavLink to="/" className="px-4" >Home</NavLink> </li>
                        <li><NavLink to="/events" className="px-4" >Events</NavLink> </li>
                        <li><NavLink to="/ourteam" className="px-4" >Team</NavLink> </li>
                        <li><NavLink to="/login" className="px-4" >Log In</NavLink> </li>
                        <li><NavLink to="/signup" className="px-4" >Register</NavLink> </li>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}