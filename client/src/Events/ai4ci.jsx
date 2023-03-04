import EventPageCard from "../components/eventpage";

export default function AI4CI() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
            AI4CI-Deep Dive into infrastructure
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="mx-auto mb-4 w-full h-36 rounded-full"
            src=""
            alt=""
          />
          <div className="p-5">
            <ul>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  About
                </h5>
              </li>
              <li>
                <p className="mb-3 font-normal text-gray-700">
                  "The Department of Civil & Infrastructure Engineering
                  initiated the application of AI-ML in the civil &
                  Infrastructure engineering process and made it more robust and
                  efficient. By automation a few of the tasks that are currently
                  done by humans, will be processed through AI-ML. The
                  department always aims to believe that this in turn, is
                  translating into cost saving and increased safety for the
                  public and the workers. Therefore, the event pulls you all to
                  exercise your mind to think of doing things with a different
                  path."
                </p>
              </li>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  Guidelines :
                </h5>
              </li>
              <li>
                1. Don’t change the codes and comments written in the file.
              </li>
              <li>2. File should be submitted in “.ipynb” format.</li>
              <li>
                3. Any inference asked in the question should be written within
                the file using text boxes.
              </li>
              <li>
                4. Write your team’s name in the first text cell of the file
                given.
              </li>
              <li>
                5. Minimum team size should be 3 and maximum 5 is allowed.
              </li>
              <li>
                6. Write inference to the point, without making more words.
              </li>
              <li>7. Follow the instructions written in comments strictly.</li>
              <p className="mt-4 mb-4">After registering for the event, you have access to download the task from the website. The event consists of 4 levels. Novice, competent, proficient, and expert. The participants have provided the necessary files and information, and will submit the task in the given time frame. For Novice level you have 3 hours, for competent you will get 2 hours, for proficient level 1 hour will be provided and for expert level 2 hours will be given to the applicants. All stream students are invited to participate in this event.</p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
