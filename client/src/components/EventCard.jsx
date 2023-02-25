import React from "react";

function EventCard(props){
    return (
        <main className="w-96  border-soild border-black border-2 px-4 rounded-3xl">
            <h1 className="py-2 font-bold text-black text-xl">{props.eventName}</h1>
            <div className="border-solid border-black border-2 bg-purple-300 rounded-3xl">
                <img src="https://www.polimec.org/images/core-values/trustless.svg" alt="evnetImage"  className="mx-auto my-5 h-48"/>
            </div>
            <div className="py-4">{props.description}</div>
        </main>
    )
}

export default EventCard;