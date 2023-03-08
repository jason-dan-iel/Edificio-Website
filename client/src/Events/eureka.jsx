import { useNavigate } from "react-router-dom";


export default function Eureka(){
  const navigate = useNavigate()

  const registerEvent = async () => {
    const token = localStorage.getItem('Token')
    const result = await fetch(  
      "https://server-sigma-neon.vercel.app/events/register", 

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
              <button onClick={registerEvent}>Register</button>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  About:
                </h5>
              </li>
              <li>
                <p className="mb-3 font-normal text-gray-700 text-lg">
                Eureka is a technical poster presentation competition for individuals interested in Civil and Infrastructure Engineering, hosted by Edificio. Participants can showcase their work related to various specializations within the field, promoting critical thinking, problem-solving, creativity, and interdisciplinary collaboration
                </p>
              </li>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  General guidelines:
                </h5>
                <p className="mb-1 font-semibold tracking-tight">The presentation must include the following details:-</p>
              </li>
              <ol className="list-disc px-10 mb-3">
                <li>Title</li>
                <li>Names of author(s) and affiliated organization(s)</li>
                <li>Participants shall prepare PPTs with not more than 15 slides</li>
                <li>Font size: 24 or above</li>
                <li>Contents of the slides can be flexible (expected contents are: Brief introduction, motivation and objectives, methods, results, conclusions, and references)</li>
                <li>Participants will have to make a recording of the presentation (Eg: using a default PowerPoint recorder, using platforms like Google Meet, or OBS Studio)</li>
                <li>Work should be original (plagiarism check will be done)</li>
              </ol>
              <li>Each participant shall be given a maximum of 10 minutes to present their work and has to submit their recording beforehand (time to be mentioned). The top 5 students shall be given the opportunity to present their work during the fest in front of panel members. The top 3 teams will be declared winners.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    )
}