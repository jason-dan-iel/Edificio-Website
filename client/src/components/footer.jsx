import React from "react";
import * as FaIcons from "react-icons/fa";

export default function Footer(){
    return (
        <main className="bg-[#133661]  text-white">
            <footer className="flex justify-between max-w-6xl m-auto footer py-10 mobile:flex-col mobile:px-10">
                <ul className="basis-1/3 mb-5">
                    <h1>Edificio</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>Indian Institute of Technology Jodhpur NH 65 Nagaur Road Karwar 342030, Jodhpur District</li>
                    <li>Phone Number: +91 9523218750</li>
                    <li>Email: edificio@iitj.ac.in</li>
                </ul>

                <ul className="basis-1/4 mb-5">
                    <h1>Quick Links</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>Home</li>
                    <li>Events</li>
                    <li>Core Team</li>
                </ul>

                <ul className="basis-1/4 mb-5">
                    <h1>External Links</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>IIT Jodhpur</li>
                </ul>

                <ul className="basis-1/4 mb-5">
                    <h1>Socials</h1>
                    <hr className="w-1/6 pb-3"/>
                    <div className="flex gap-4 text-2xl hover:cursor-pointer">
                        <FaIcons.FaInstagram />
                        <FaIcons.FaLinkedin />
                    </div>
                </ul>
            </footer>
            <section className="py-5 bg-[#12263f]">
                <p className="text-center">Made with &#9829; by the Web Dev Team of Edificio</p>
            </section>
        </main>

    )
}