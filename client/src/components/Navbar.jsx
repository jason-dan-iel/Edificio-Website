import React from "react";

export default function Navbar(){
  return(
    <nav className="flex justify-between p-8 items-center font-Kanit">
      <li className="list-none font-bold text-2xl">Edificio</li>
      <ul className="flex gap-5">
        <li>Events</li>
        <li>Schedule</li>
        <li>Our Team</li>
        <li>Sponsors</li>
      </ul>
      <ul className="flex gap-2 items-center">
        <li className="font-semibold">Log In</li>
        <li className="bg-black text-white py-2 px-6">Register</li>
      </ul>
    </nav>
  )
}