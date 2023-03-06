import React from "react";
import HamburgerMenu from 'react-hamburger-menu';


export default function Navbar() {
    return (
        <main>
            <nav className=" fixed navbar w-screen px-20 text-2xl text-white bg-[#133661] mobile:px-5 ">
                <ul className="flex justify-between items-center">
                    <section>
                        <img src="/logo_l.png" alt="" className="h-16 w-16" />
                    </section>

                </ul>
            </nav>
        </main>
    )
}