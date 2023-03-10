import { useNavigate } from "react-router-dom";


export default function Sympossium(){
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
         body: JSON.stringify({token: token, event: 'sympossium'}),
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

    return(
        <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-white text-center uppercase">
            Symposium
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg ">
          <img
            className="mx-auto mb-4 w-[40rem] h-96 mt-10"
            src="/events/symp.png"
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
                Panel discussion and guest talk for helping ideas making and learn something panel these activities can help to foster idea creation and promote learning by providing opportunities
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}