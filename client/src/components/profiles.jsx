import { useEffect } from "react";
import { useState } from "react";

export default function Profiles() {

    const [details,setDetails] = useState({});

    const token = localStorage.getItem("Token")
    const getuserProfile = async () => {
         const user = await fetch(
            "https://edificio-website-woad.vercel.app/api/user/getUser",{
                method : "POST",
                body : JSON.stringify({"token" : token}),
                headers: {
                    'Content-Type': 'application/json'
                  }
            }
        )
        const data = await user.json()
        setDetails(data)
        console.log(data)
    }
    useEffect( ()=>{
        getuserProfile()
    },[])
    return (
        <section className="pt-16  h-[2000px]">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="mt-48  flex flex-col min-w-0 break-words bg-white w-96 mb-6 shadow-xl rounded-lg">
            <div className="px-6 my-12">
                <div className="text-center text-xl font-semibold mb-4">Profile</div>
              <div className=" ">
                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  Name : 
                {details.name} 
                </h3>

                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  Username : 
                {details.username} 
                </h3>

                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  Email: 
                {details.email} 
                </h3>

                <h3 className=" font-semibold leading-normal text-blueGray-700 mb-2">
                  College :
                {details.college} 
                </h3>
              </div>
            </div>
          </div>
        </div>
        </section>
    );
  }
  