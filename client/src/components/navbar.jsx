import React from "react"; 
import { NavLink } from "react-router-dom";


export default function Navbar(){
    function addActiveStyle(){
        console.log("hello world")
    }
    const handleLogout = () =>{
        localStorage.clear();
        location.reload();
    }
    const token = localStorage.getItem("Token")
    return(
        <nav className="z-999 fixed navbar w-screen px-20 text-xl text-white bg-[#133661] ">
            <ul className="flex justify-between items-center p-1">
                <section>
                <NavLink to="/" className="" ><img src="/logo_l.png" alt="" className="h-16 w-16"/></NavLink>

                </section>
                <section>
                    <ul className="flex items-center mobile:hidden">
                        <li><NavLink to="/" className="px-4" >Home</NavLink> </li>
                        <li><NavLink to="/events" className="px-4" >Events</NavLink> </li>
                        <li><NavLink to="/ourteam" className="px-4" >Team</NavLink> </li>
                        <li>{ (token) ?<NavLink to="/profile" className="px-4" >Profile</NavLink> : <NavLink to="/login" className="px-4" >Log In</NavLink>} </li>

                        <li>{ (token) ? <li className="px-4 hover:cursor-pointer" onClick={handleLogout}>Log Out</li> : <NavLink to="/signup" className="px-4" >Register</NavLink>} </li>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}