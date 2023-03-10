import { json, useNavigate } from "react-router-dom";


export default function Eureka(){
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
         body: JSON.stringify({token: token, event: 'eureka'})
       }
      ) 
   
       const jsonData = await result.json()
       try {
         alert(jsonData.success);
         navigate('/events')
       } catch (error) {
         alert(jsonData.error);
       }
     } else{
      const jsonData = {error : "Kindly Signup & Login First"};
      alert(jsonData.error);
     }
  }

    return(
        <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white text-center">
            Eureka
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg ">
          <img
            className="mx-auto mb-4 w-[40rem] h-96 mt-10"
            src="/events/poster.png"
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
                The Department of Civil & Infrastructure Engineering welcomes you all to submit technical presentations related to any project/research work you have undertaken. Being a department thriving to achieve interdisciplinary solutions, we encourage students of varied engineering backgrounds to help solve real-world civil engineering-oriented problems through their project/research work.
                </p>
              </li>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  General guidelines:
                </h5>
                <p className="mb-1 font-semibold tracking-tight">The presentation must include the following details:-</p>
              </li>
              <ol className="list-disc px-10 mb-3 text-gray-700">
                <li>There should be a Title of the presentation.</li>
                <li>Participants shall prepare PPTs with not more than 15 slides</li>
                <li>Contents of the slides can be flexible (expected contents are: Brief introduction, motivation and objectives, methods, results, conclusions, and references)</li>
                <li className="italic font-black text-black">Work should be original (plagiarism check will be done)</li>
                <li>Participants have to register the event on the EDIFICIO website <a className="inline hover:cursor-pointer text-blue-400 underline italic" href="https://www.edificioiitj.org.in/eureka" target={"_blank"}>Link</a> by clicking the "register" button.</li>
                <li>Submission will be done through the google form, we will send the mail to all the registered candidates.</li>
                <li>
                Round I (Online Presentation Submission)
                </li>
                <ol className=" list-inside list-decimal">
                  <li>Participants need to make a presentation with not more than 15 slides.</li>
                  <li>Submission Deadline : 12.03.2023 11:59 P.m. (Submission form will be shared to the registered participants)</li>
                </ol>
                <li>Round II (Online Live Presentation)</li>
                <li>
                Round I (Online Presentation Submission)
                </li>
                <ol className=" list-inside list-decimal">
                  <li>Venue : Online (Google Meet).</li>
                  <li>Date : 13.03.2023</li>
                  <li>Time : 07:00 P.m.</li>
                  <li>Participants need to present their ppts to the judges.</li>
                  Each participant will get only 8 minutes for their presentation, exceeding the time limit will result in penalty of points. 
                </ol>
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

    )
}