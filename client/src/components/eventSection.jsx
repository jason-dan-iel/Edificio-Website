import React from "react";
import EventCard from "./eventsCard";

export default function EventSection(){
    return(
        <main className="flex w-3/5 m-auto justify-between">
            <EventCard />
            <EventCard />
        </main>
    )
}