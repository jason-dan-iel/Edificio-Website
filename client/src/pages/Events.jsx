import React from "react";
import EventCard from "../components/eventsCard";
import Footer from "../components/footer";
import Schedule from "../components/schedule";

export default function Events() {
  return (
    <section>
      <div className="z-999 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 ">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mt-10 mb-2 text-4xl tracking-tight font-extrabold text-white">Events</h2>
        </div>
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mt-10 mb-2 text-4xl tracking-tight font-extrabold text-blue-400" id="blin">Prizes worth Rs. 25k</h2>
        </div>
        
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-3 justify-center">
          <EventCard
            imgPath={"/events/bridge.png"}
            heading="BRIDGE MAKING"
            content={"Testing Engineering Skills and Encouraging Creativity"}
            linkURL="/bridgemaking"
            Prize = "Prize worth Rs. 4k"
          />
          <EventCard
            imgPath={"/events/quiz.png"}
            heading="CIVIQ"
            content={"Test your knowledge and learn more about civil engineering"}
            linkURL="/civiq"
            Prize = "Prize worth Rs. 4k"
          />

          <EventCard
            imgPath={"/events/cad.png"}
            heading="CADECETTO"
            content={"Online Event Testing Creativity and Drafting Skills using CAD Platforms"}
            linkURL="/cadecetto"
            Prize = "Prize worth Rs. 4k"
          />
          <EventCard
            imgPath={"/events/poster.png"}
            heading="EUREKA"
            content={"Technical Poster Presentation Competition Showcasing Innovations in Civil and Infrastructure Engineering"}
            linkURL="/eureka"
            Prize = "Prize worth Rs. 4k"
          />
          <EventCard
            imgPath={"/events/pixivils.png"}
            heading="P I X I V I L S"
            content={"Problem-Solving Competition for Identifying and Solving Civil and Infrastructure Engineering Issues"}
            linkURL="/pixivils"
            Prize = "Prize worth Rs. 4k"
          />
          <EventCard
            imgPath={"/events/symp.png"}
            heading="SYMPOSIUM"
            content={"Panel Discussion and Guest Talks"}
            linkURL="/symposium"
          />
        </div>
      <div className="mx-auto max-w-screen lg:mb-16">
            <h2 className="mt-10 text-4xl tracking-tight font-extrabold text-white mb-4">Schedule</h2>

      <Schedule />
      </div>
      </div>
      <Footer />
    </section>
  );
}
