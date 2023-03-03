import React from "react";
import EventCard from "./eventsCard";

export default function EventSection(){
    return(
        <main className="w-3/5 m-auto my-10">
            <h1 className="text-white text-2xl">Events</h1>
            <hr className="w-3/5 my-5"/>
            <section className="grid grid-cols-2 gap-x-6 gap-y-10">
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </section>
        </main>
    )
}