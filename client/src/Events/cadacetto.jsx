import FormAction from "../components/formaction";
import { useNavigate } from "react-router-dom";

export default function Cadacetto() {

  const navigate = useNavigate()

  const registerEvent = async () => {
    const token = localStorage.getItem('Token')
    if(token){

      const result = await fetch(  
        "https://server-sigma-neon.vercel.app/api/events/register", 
       {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({token: token, event: 'cadacetto'})
       }
      ) 
   
       const jsonData = await result.json()
       try {
         alert(jsonData.success);
         navigate('/events')
       } catch (error) {
         alert(jsonData.error);
       }
    }else{
      const jsonData = {error : "Kindly Signup & Login First"};
      alert(jsonData.error);
     }
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
                <button onClick={registerEvent} className='block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>Register</button>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  About:
                </h5>
              </li>
              <li>
                <p className="mb-3 font-normal text-gray-700 text-lg">
                The CADecetto event is an online event that will be attended by eligible participants from across the country, including academics and industry professionals. The event aims to test the creativity and drafting skills of participants using CAD platforms. Winners will be announced on the basis of their performance and awarded cash prizes, while all participants will receive certificates.
                </p>
              </li>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  Rules:
                </h5>
              </li>
              <li>It will be an individual event for the participants. This contest will happen in 2 tiers in the form of league-type rounds. Students will be eliminated after each tier.</li>
              <ol className="list-decimal px-10 my-2">
                <li className="mt-2 font-semibold underline">Tier 1 Pupil Round
                </li>
                    <ol className="list-disc list-inside">
                        <li>Venue : Online (Google Meet)</li>
                        <li>Date : 13.03.2023</li>
                        <li>Time : 20:00 IST</li>
                        <li>The problem statement will be released through the google meet.</li>
                    </ol>
                <li className="mt-2 font-semibold underline">Tier 2 “The Veteran One” Round
                </li>
                    <ol className="list-disc px-5">
                        <li>Venue : Online (Google Meet)</li>
                        <li>Date : 14.03.202</li>
                        <li>Time : 19:00 IST</li>
                        <li>Similar to tier 1 round but the difficulty level of the problem will be higher.</li>
                        <li>The problem statement will be released through the google meet. </li>
                    </ol>
                    <li>Submissions must be made within the stipulated time limit.</li>
                    <li>All participants will be shown an AutoCAD file and they will have to design a similar figure with the given information about it in AutoCAD/Revit.</li>
                    <li>Top 3 teams will be declared as the winners.</li>
                    <li className="font-bold">Work should be done on your own (plagiarism check will be done).</li>
                    <li>Participants have to register the event on the EDIFICIO website <a className="inline hover:cursor-pointer text-blue-400 underline italic" href="https://www.edificioiitj.org.in/cadecetto" target={"_blank"}>Link</a> by clicking the "register" button.</li>
                    <li>Submission will be done through the google form, we will send the mail to all the registered candidates</li>
                    <li>Judging will be done on the basis of various criterias.</li>
              </ol>
              <li className="text-blue-700 text-center">Note - All decisions taken by the organizing team will be deemed as final, and no more changes will be encouraged, thus holding the full authority to change any of the above rules as per circumstances.</li>
              <li className="text-center">Contact : 
Prince Sonker : +91 9056666050
</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
