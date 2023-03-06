export default function Civiq(){
    return (
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
              <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white text-center">
                CiviQ
              </h2>
            </div>
            <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg ">
              <img
                className="mx-auto mb-4 w-full h-36 rounded-full"
                src=""
                alt=""
              />
              <div className="p-10">
                <ul>
                  <li>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                      About:
                    </h5>
                  </li>
                  <li>
                    <p className="mb-3 font-normal text-gray-700 text-lg">
                    This quiz competition provides an opportunity for students to test their knowledge and learn more about civil engineering in a fun and interactive way. We hope that this competition will encourage students to go into civil engineering and help improve the built environment.
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                      Guidelines & Rules:
                    </h5>
                  </li>
                  <ol className="list-disc px-10">
                    <li>Maximum team size can be of 4 members</li>
                    <li>QUIZ contains in total 2 rounds</li>
                    <ol className="list-disc px-5 italic font-semibold">
                      <li> CIVIL101 </li>
                      <li>Crusade The Concepts</li>
                    </ol>
                    <ol className="mt-5 list-decimal">
                        <li className="">First Round (All teams can participate)
                        </li>
                            <ol className="list-disc px-5">
                                <li>Civil 101: To test the fact based civil engineering knowledge and a few conceptual questions</li>
                                <li>The final score of round 1 will serve as the basis for the entry in round 2</li>
                            </ol>
                        <li>Final Round
                        </li>
                            <ol className="list-disc px-5">
                                <li>Only the top five teams from round one will be eligible for this round</li>
                                <li>This will also be an objective quiz consisting of multiple correct questions</li>
                                <li>Crusade the Concepts (brainstorming questions covering a range of topics within civil engineering, such as structural analysis, geotechnical engineering, transportation engineering, water resources engineering, and construction management)</li>
                            </ol>
                    </ol>
                    <li>First round total score will be calculated on the basis of total scores in Civil 101 and Crusade the Concepts</li>
                  </ol>
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
    
}