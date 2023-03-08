import React from "react";
import { NavLink } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import MobileNavbar from "./mobileNavbar";
import { useNavigate } from "react-router-dom";


export default function Navbar(){

    const [hamburger, setHamburger] = useState(false);
    const navigate = useNavigate();

    // the method to handle logout
    const handleLogout = () =>{
        localStorage.clear();
        navigate('/');
        location.reload();
    }

    // showing the hamburger menu
    const showHamburger = () => {
        setHamburger(!hamburger);
        console.log(hamburger)
        if(hamburger){
            console.log("true")
            navigate('/mobileNavbar')
        }
        navigate('/')
    }

    // the token from the backend
    const token = localStorage.getItem("Token")


    return(
        <nav className="z-999 fixed navbar px-20 w-screen text-xl text-white bg-[#133661] mobile:px-0">
            <ul className="flex justify-between items-center p-1  mobile:flex mobile:justify-center mobile:items-center">
                <section className="mobile:hidden">
                <NavLink to="/" className="" ><img src="/logo_l.png" alt="" className="h-16 w-16"/></NavLink>

                </section>
                <section className=" mobile:flex mobile:justify-center mobile:items-center">
                    <ul className="flex items-center mobile:justify-between mobile:text-xs mobile:h-16 mobile:px-1">
                        <li><NavLink to="/" className="px-4 mobile:px-2" >Home</NavLink> </li>
                        <li><NavLink to="/events" className="px-4 mobile:px-2" >Events</NavLink> </li>
                        <li><NavLink to="/ourteam" className="px-4 mobile:px-2" >Team</NavLink> </li>
                        <li>{ (token) ?<NavLink to="/profile" className="px-4 mobile:px-2" >Profile</NavLink> : <NavLink to="/login" className="px-4 mobile:px-2" >Log In</NavLink>} </li>
                        <li>{ (token) ? <p className="px-4 mobile:px-2 hover:cursor-pointer" onClick={handleLogout}>Log Out</p> : <NavLink to="/signup" className="px-4 mobile:px-2" >Register</NavLink>} </li>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}