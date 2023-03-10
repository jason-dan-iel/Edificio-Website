import { useNavigate } from "react-router-dom";

export default function Pixivillis() {

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
         body: JSON.stringify({token: token, event: 'pixivillis'})
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
          <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white text-center uppercase">
            p i x i v i l i s
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg ">
          <img
            className="mx-auto mb-4 w-[40rem] h-96 mt-10"
            src="/events/pixivils.png"
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
                <p className="mb-1 font-normal text-gray-700 text-lg">
                Participants are required to identify a problem related to Civil and Infrastructure Engineering in any area (e.g. - hometown, place where you study). Prepare a problem statement using visuals of the problem and provide potential viable technical solutions in a short document. The 10 best solutions will go through the final round where they will present their idea to panel members. The top 3 participants/teams will be declared as winners
                </p>
                <p className="mb-3">[Keywords section , 7-8 keywords]</p>
              </li>
              <li>
                <h5 className="my-2 text-2xl font-bold tracking-tight uppercase underline">
                  General guidelines:
                </h5>
                <p className="font-semibold tracking-tight">
                  The document must include the following details:-
                </p>
              </li>
              <ol className="list-decimal px-10">
                <li>Title</li>
                <li>Names of the applicant/ applicants (Not more than 3)</li>
                <li>
                  The description of the problem along with the study area and
                  the relevant picture(s) in not more than 100 words
                </li>
                <li>
                  Potential technical solution(s) to address the problem in not
                  more than 100 words
                </li>
                <li>Submit the document in word/pdf forma</li>
                <li>
                  Other necessary information (technical) in a sentence or two
                </li>
              </ol>
              <li className="mt-2 italic font-semibold">Top 10 teams shall be given the opportunity to present their work during the fest. And top 3 teams shall be awarded on the basis of points obtained</li>
              <li>
                <h5 className="my-2 text-2xl font-bold tracking-tight uppercase underline">
                  Judging criteria:
                </h5>
              </li>
              <ol className="list-decimal px-10">
                <li>Problem statement:  20 points</li>
                <li>Potential solution: 30 points</li>
              </ol>
              <li className="text-blue-700 text-center">Note - All decisions taken by the organizing team will be deemed as final, and no more changes will be encouraged, thus holding the full authority to change any of the above rules as per circumstances.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
