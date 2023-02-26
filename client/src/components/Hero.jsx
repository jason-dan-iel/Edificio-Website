import React from "react";

export default function Hero(){
    return(
        <main className="w-screen flex-grow flex px-8">
            <section className="basis-1/2 flex justify-center items-start  flex-col">
                <div>
                    <h1 className="text-9xl font-bold">Edificio 23</h1>
                    <p className="text-2xl">5th - 8th March 2023</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, maiores!</p>   

                    <div className="flex py-4">
                        <input type="text" placeholder="Enter Your Email Here" className="border-solid border-2 border-black py-2 px-3"/>
                        <button className="bg-black text-white px-3">Enter Here</button>
                    </div>


                </div>

  
            </section>
            <section className="basis-1/2">
                <img src="https://i.postimg.cc/W4yK3rtP/image.png" className= "h-full" />
            </section>
        </main>
    )
}