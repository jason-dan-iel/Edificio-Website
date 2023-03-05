import React from "react";
import EventCard from "../components/eventsCard";

export default function Events() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white">Events</h2>

        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-3">
          <EventCard
            imgPath={"/logo_d.png"}
            heading="BRIDGE MAKING"
            content={"Loremadf a fa fa df af "}
            linkURL="/bridgemaking"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="CIVIQ"
            content={"Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind"}
            linkURL="/civiq"
          />

          <EventCard
            imgPath={"/logo_d.png"}
            heading="CADACETTO"
            content={"Loremadf a fa fa df af "}
            linkURL="/cadacetto"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="EUREKA"
            content={"Loremadf a fa fa df af "}
            linkURL="/eureka"
          />
          <EventCard
            imgPath={"/logo_d.png"}
            heading="PIC CIVILS"
            content={"Loremadf a fa fa df af "}
            linkURL="/piccivils"
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
