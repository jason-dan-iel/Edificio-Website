import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <main className="bg-[#133661]  text-white">
            <footer className="flex justify-between max-w-7xl m-auto footer py-10 mobile:flex-col mobile:px-10">
                <ul className="basis-1/3 mb-5">
                    <a href="https://www.edificioiitj.org.in/" target={"_blank"}>Edificio</a>
                    <hr className="w-1/6 pb-3"/>
                    <li>Indian Institute of Technology Jodhpur NH 65 Nagaur Road Karwar 342030, Jodhpur District</li>
                    <li>Phone Number: +91 7340293578</li>
                    <li>Email: edificio_cie@iitj.ac.in</li>
                </ul>

                <ul className="basis-1/4 mb-5">
                    <h1>Quick Links</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/ourteam">Core Team</Link></li>
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
                        <a href="https://www.instagram.com/edificio_cie.iitj/" target={'_blank'}><FaIcons.FaInstagram /></a>
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