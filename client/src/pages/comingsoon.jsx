import React from "react";

export default function Comingsoon() {
  return (
    <div className="flex items-center justify-center h-screen bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-600 ">
        <div className="container">
            <div className="bg-[#807ad6] border-[#736dd4] dark:bg-[#433e96] dark:border-[#45428b] rounded-lg shadow-lg p-5 md:p-20 mx-2">
                <div className="text-center">
                    <h2 className="text-4xl tracking-tight leadi10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                        Edificio 23
                    </h2>
                    <h3 className="text-xl md:text-3xl mt-10 uppercase">
                        Coming soon
                    </h3>
                </div>
            </div>
        </div>
    </div>
  );
}
