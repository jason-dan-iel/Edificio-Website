import React from "react";
import EventCard from "../components/eventsCard";

export default function Events() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white">Events</h2>

        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-3">
          <EventCard
            imgPath={"/logo_d.png"}
            heading="BRIDGE MAKING"
            content={"Testing Engineering Skills and Encouraging Creativity"}
            linkURL="/bridgemaking"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="CIVIQ"
            content={"Test your knowledge and learn more about civil engineering"}
            linkURL="/civiq"
          />

          <EventCard
            imgPath={"/logo_d.png"}
            heading="CADACETTO"
            content={"Online Event Testing Creativity and Drafting Skills using CAD Platforms"}
            linkURL="/cadecetto"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="EUREKA"
            content={"Technical Poster Presentation Competition Showcasing Innovations in Civil and Infrastructure Engineering"}
            linkURL="/eureka"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="P I X I V I L I S"
            content={"Problem-Solving Competition for Identifying and Solving Civil and Infrastructure Engineering Issues"}
            linkURL="/pixivilis"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="SYMPOSIUM"
            content={"Loremadf a fa fa df af "}
            linkURL="/symposium"
          />
        </div>
      </div>
    </section>
  );
}
