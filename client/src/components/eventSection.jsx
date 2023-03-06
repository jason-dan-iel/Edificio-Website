import React from "react";
import HomeEventCard from "./homeEventCard";

export default function EventSection(){
    return(
        <main className="w-3/5 m-auto my-10 text-center">
            <h1 className="text-white text-2xl">Events</h1>
            <hr className="w-3/5 my-5"/>
            <section className="grid grid-cols-2 gap-x-6 gap-y-10">
                <HomeEventCard 
                imgPath={"/logo_d.png"}
                heading={"CiviQ"}
                linkURL={"/civiq"}
                />
                <HomeEventCard 
                imgPath={"/logo_d.png"}
                heading={"Bridge Making"}
                linkURL={"/bridgemaking"}
                />
                <HomeEventCard 
                imgPath={"/logo_d.png"}
                heading={"Pic Civilis"}
                linkURL={"/piccivils"}
                />
                <HomeEventCard 
                imgPath={"/logo_d.png"}
                heading={"Symposium"}
                linkURL={"/symposium"}
                />
            </section>
        </main>
    )
}