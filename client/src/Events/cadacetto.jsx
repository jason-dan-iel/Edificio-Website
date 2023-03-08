import FormAction from "../components/formaction";
import { useNavigate } from "react-router-dom";

export default function Cadacetto() {

  const navigate = useNavigate()

  const registerEvent = async (e) => {
    
    e.preventDefault();
    const token = localStorage.getItem('Token')
    const result = await fetch( 
      'https://edificio-website-woad.vercel.app/api/events/register',{
        method: 'POST',
        body: JSON.stringify({token: token ,event: 'cadacetto'}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const jsonData = await result.json()
    console.log(jsonData)
    alert(jsonData.success);
    navigate('/events')


  }

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white text-center">
            CADecetto
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg ">
          <img
            className="mx-auto mb-4 w-[40rem] h-96 mt-10"
            src="/events/cad.png"
            alt=""
          />
          <div className="p-10">
            <ul>
              <li>
                <FormAction handleSubmit={registerEvent} text='Register'/>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  About:
                </h5>
              </li>
              <li>
                <p className="mb-3 font-normal text-gray-700 text-lg">
                The CADecetto event is an online event that will be attended by eligible participants from across the country, including academics and industry professionals. The event aims to test the creativity and drafting skills of participants using CAD platforms. Winners will be announced on the basis of their performance and awarded cash prizes, while all participants will receive certificates
                </p>
              </li>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  Rules:
                </h5>
              </li>
              <li>It will be an individual event for the participants. This contest will happen in 3 tiers in the form of league-type rounds. Students will be eliminated after each tier.</li>
              <ol className="list-decimal px-10 my-2">
                <li className="mt-2 font-semibold underline">Tier 1 Pupil Round
                </li>
                    <ol className="list-disc px-5">
                        <li>All participants will be shown an AutoCAD file and they will have to draw a similar figure with the given information about it in AutoCAD/Revit</li>
                        <li>The problem will be given through google meet</li>
                        <li>The time limit will be given</li>
                        <li>Top 10 teams will advance to the next round</li>
                    </ol>
                <li className="mt-2 font-semibold underline">Tier 2 Elite Round 
                </li>
                    <ol className="list-disc px-5">
                        <li>Similar to tier 1 round but moderate level of problem</li>
                        <li>The time limit will be given</li>
                        <li>Top 5 teams will advance to the next round</li>
                    </ol>
                <li className="mt-2 font-semibold underline">Tier 3 “The Veteran One” Round
                </li>
                    <ol className="list-disc px-5">
                        <li>Similar to tier 1 round but difficult level of problem</li>
                        <li>The time limit will be given</li>
                        <li>Top 3 teams will be declared as the winners</li>
                    </ol>
              </ol>
              <li className="font-semibold italic">For all rounds if some students are not able to complete the whole design then the student correctly completing the most of the designs will be screened to next round and it will be decided by Organising Team</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
