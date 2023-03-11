import { useNavigate } from "react-router-dom";

export default function Sympossium() {
  const navigate = useNavigate();

  const registerEvent = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const result = await fetch(
        "https://server-sigma-neon.vercel.app/api/events/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token, event: "sympossium" }),
        }
      );

      const jsonData = await result.json();
      try {
        alert(jsonData.success);
        navigate("/events");
      } catch (error) {
        alert(jsonData.error);
      }
    } else {
      const jsonData = { error: "Kindly Signup & Login First" };
      alert(jsonData.error);
    }
  };

  const deregisterEvent = async () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const result = await fetch(
        "https://server-sigma-neon.vercel.app/api/events/deregister",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: token, event: "sympossium" }),
        }
      );

      const jsonData = await result.json();
      try {
        alert(jsonData.success);
        navigate("/events");
      } catch (error) {
        alert(jsonData.error);
      }
    } else {
      const jsonData = { error: "Kindly Signup & Login First" };
      alert(jsonData.error);
    }
  };

  return (
    <section className="h-[2000px]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mt-10 mb-2 text-4xl tracking-tight font-extrabold text-white text-center uppercase">
            Symposium
          </h2>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow text-lg">
          <img
            className="mx-auto mb-4 w-[40rem] h-96 mt-10"
            src="/events/symp.png"
            alt=""
          />
          <div className="p-10">
            <ul>
              <ul className="flex relative justify-center">
                <li className="px-2">
                  <button
                    onClick={registerEvent}
                    className="block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Register
                  </button>
                </li>
                <li className="px-2">
                  <button
                    onClick={deregisterEvent}
                    className="block m-auto px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Deregister
                  </button>
                </li>
              </ul>
              <li>
                <h5 className="my-2 text-2xl font-bold tracking-tight uppercase underline">
                  About:
                </h5>
              </li>
              <li>
                <p className="mb-1 font-normal text-gray-700 text-lg">
                  Panel discussion and guest talk for helping ideas making and
                  learn something panel these activities can help to foster idea
                  creation and promote learning by providing opportunities
                </p>
              </li>
              <li className="text-center">
                Contact : Prince Sonker : +91 9056666050
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
