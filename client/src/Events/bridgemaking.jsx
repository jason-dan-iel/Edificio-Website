import { json, useNavigate } from "react-router-dom";


export default function BridgeMaking() {
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
        body: JSON.stringify({token: token, event: 'bridgemaking'})
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
            Bridge Making Competition
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg ">
          <img
            className="mx-auto mb-4 w-[40rem] h-96 mt-10"
            src="/events/bridge.png"
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
                  Bridge-making competitions are an exciting way to test
                  students' engineering skills and creativity. In this
                  competition, people have to make a bridge using the fewest
                  number of popsicle sticks possible that can still hold a
                  certain amount of weight. We can make sure the competition is
                  fair and safe for everyone by following the rules and
                  guidelines.
                </p>
              </li>
              <li>
                <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase underline">
                  Rules:
                </h5>
              </li>
              <ol className="list-decimal px-8">
                <li>Each team can have a maximum of four participants</li>
                <li>Bridge making must get completed within the given time limit i.e. 1 hour</li>
                <li>The bridge must be constructed using only popsicle sticks and white glue</li>
                <li>The bridge must have a span of 45 centimeters and a minimum height clearance of 15 centimeters</li>
                <li>The bridge must support a specified weight, which will be determined before the start of the competition</li>
                <li>The bridge must be self-supporting and cannot be attached to any external structure. The bridge must be able to withstand the weight for at least 30 seconds</li>
                <li>The team that uses the least number of popsicle sticks to build the bridge will be declared the winner</li>
              </ol>
              <li>
                <h5 className="my-2 text-2xl font-bold tracking-tight uppercase underline">
                  Judging criteria:
                </h5>
              </li>
              <ol className="list-decimal px-8">
                <li>Structural integrity of the bridge: The bridge must be able to support weight without collapsing</li>
                <li>Use of the least number of popsicle sticks: Points will be awarded based on the number of popsicle sticks used in the construction of the bridge.</li>
                <li>Creativity: The bridge's design will be judged on how original and creative it is.</li>
                <li>Aesthetics: Points will be awarded for the overall appearance of the bridge</li>
              </ol>
              <li className="text-blue-700 text-center">Note - All decisions taken by the organizing team will be deemed as final, and no more changes will be encouraged, thus holding the full authority to change any of the above rules as per circumstances.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
