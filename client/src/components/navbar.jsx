import React from "react"; 
import logo from '../assets/EdificioLogo.png' 

export default function Navbar(){
    return(
        <nav className="h-1/6">
            <ul className="flex justify-around items-center">
                <section>
                    <img src={logo} alt="" className="h-full w-20"/>
                </section>
                <section>
                    <ul className="flex items-center">
                        <li className="px-4 active:text-blue-400">Home</li>
                        <li className="px-4">Events</li>
                        <li className="px-4">Our Team</li>
                        <li className="px-4">LogIn</li>
                        <li className="px-4">Register</li>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}