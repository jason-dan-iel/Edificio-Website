import React from "react";
import TeamCard from "../components/teamcard";

export default function OurTeam() {
  return (
    <section>
      <div className="z-999 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white">
            Our team
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Meet the People Behind the Festival
          </p>
        </div>

        <div className="grid gap-8 lg:gap-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          <TeamCard
            imgPath={"/team_photos/abhinavsinghtawar.jpeg"}
            instaLink={"https://www.instagram.com/abhinavsinghtawar/"}
            Name={"Abhinav Singh Tawar"}
            Designation={"Overall Coordinator"}
          />
          <TeamCard
            imgPath={"/team_photos/manojsolara.jpeg"}
            instaLink={"https://www.instagram.com/sol_manoz_03/"}
            Name={"Manoj Solara"}
            Designation={"Departmental Secretary"}
          />
          <TeamCard
            imgPath={"/team_photos/bansal_executive.jpeg"}
            instaLink={"https://www.instagram.com/smartybansal10543/"}
            Name={"Mohit Bansal"}
            Designation={"Departmental Executive"}
          />

          <TeamCard
            imgPath={"/team_photos/ankit_resources.jpg"}
            instaLink={"https://www.instagram.com/ankitsamota_/"}
            Name={"Ankit Kumar"}
            Designation={"Resources"}
          />
          <TeamCard
            imgPath={"https://i.postimg.cc/x14M7xvC/Whats-App-Image-2023-03-06-at-10-05-01.jpg"}
            instaLink={"#"}
            Name={"Kunal Tiwari"}
            Designation={"Web Development"}
          />
          <TeamCard
            imgPath={"/team_photos/jason_webd.jpg"}
            instaLink={"https://www.instagram.com/jason_dan_iel/"}
            Name={"Jason Daniel"}
            Designation={"Web Development"}
          />
          <TeamCard
            imgPath={"/team_photos/jesika_dnc.jpeg"}
            instaLink={"https://www.instagram.com/jesika_rai_/"}
            Name={"Jesika Rai"}
            Designation={"Design and Content"}
          />
          <TeamCard
            imgPath={"/team_photos/tekram_dnc.jpeg"}
            instaLink={"https://www.instagram.com/tekrammeena.852021/"}
            Name={"Tekram Meena"}
            Designation={"Design and Content"}
          />
          <TeamCard
            imgPath={"/team_photos/rifa_events.jpeg"}
            instaLink={"https://www.instagram.com/rifa_bint_e_haider/"}
            Name={"Rifa Khan"}
            Designation={"Events"}
          />
          <TeamCard
            imgPath={"/team_photos/prince_events.jpeg"}
            instaLink={"https://www.instagram.com/princesonker__/"}
            Name={"Prince Sonker"}
            Designation={"Events"}
          />
          <TeamCard
            imgPath={"/team_photos/praveen_events.jpeg"}
            instaLink={"https://www.instagram.com/__praveen.kumar_/"}
            Name={"Praveen Kumar"}
            Designation={"Events"}
          />
          <TeamCard
            imgPath={"/team_photos/divyang_pr.jpeg"}
            instaLink={"https://www.instagram.com/divyangdeepak/"}
            Name={"Divyang Palshetkar"}
            Designation={"Public Relation"}
          />
          <TeamCard
            imgPath={"/team_photos/sainath_pr.jpeg"}
            instaLink={"https://www.instagram.com/sainath_lamdade/"}
            Name={"Sainath Lamdade"}
            Designation={"Public Relation"}
          />
          <TeamCard
            imgPath={"/team_photos/psss_marketing.jpeg"}
            instaLink={"https://www.instagram.com/_p.s.s.satwik_/"}
            Name={"Sai Satwik"}
            Designation={"Marketing"}
          />
          <TeamCard
            imgPath={"/team_photos/sidd_m.jpeg"}
            instaLink={"https://www.instagram.com/siddchauhan2002/"}
            Name={"Siddharth Chauhan"}
            Designation={"Marketing"}
          />

        </div>
      </div>
    </section>
  );
}
