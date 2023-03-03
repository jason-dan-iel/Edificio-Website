import React from "react";

export default function EventCard(){
    return (
        <main className="w-2/5 aspect-square flex flex-col bg-blue-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 text-white">
        <section>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT-sEAvu3hOzoUVrVV8Gn_cVR5wxeNIGXk5L1NrGv&s" alt="" className="w-full p-5"/>
        </section>                
        <section className="basis-1/2 px-5 ">
            <h1 className="text-2xl text-white font-semibold">Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam optio consectetur mollitia impedit sunt odio tempore sit asperiores, a porro?
            </p>
        </section>
    </main>
    )
}