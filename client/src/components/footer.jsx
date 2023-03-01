import React from "react";

export default function Footer(){
    return (
        <main className="bg-pink-50 py-10">
            <footer className="flex justify-between max-w-6xl m-auto footer">
                <ul className="basis-1/3">
                    <h1>Edificio</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>Indian Institute of Technology Jodhpur NH 65 Nagaur Road Karwar 342030, Jodhpur District</li>
                    <li>Phone Number: +91 9523218750</li>
                    <li>Email: edificio@iitj.ac.in</li>
                </ul>

                <ul className="basis-1/4">
                    <h1>Quick Links</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>Home</li>
                    <li>Events</li>
                    <li>Core Team</li>
                </ul>

                <ul className="basis-1/4">
                    <h1>External Links</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>IIT Jodhpur</li>
                </ul>

                <ul className="basis-1/4">
                    <h1>Socials</h1>
                    <hr className="w-1/6 pb-3"/>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                </ul>
            </footer>
        </main>

    )
}