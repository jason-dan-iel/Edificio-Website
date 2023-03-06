import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";


export default function Hero() {
    return (
        <main id="hero" className="w-screen h-screen flex text-white mobile:flex-col pt-10">
            <section className="basis-1/2 flex flex-col justify-center items-center mobile:px-10">
                <div className="mobile:w-8/10">
                    <h1 className="text-7xl mobile:text-4xl pb-5">Edificio 23</h1>
                    <p className="text-xl">Build Innovate Connect</p>
                </div>
            </section>

            <section className="basis-1/2 text-white flex justify-center items-center">
                <TagCloud className="font-bold mobile:w-full "
                    options={(w) => ({
                        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                        maxSpeed: "fast",
                    })}
                    onClick={(tag, ev) => alert(tag)}
                    onClickOptions={{ passive: true }}
                >
                    {[
                        "VSCode",
                        "TypeScript",
                        "React",
                        "Preact",
                        "Parcel",
                        "Jest",
                        "Next",
                        "ESLint",
                        "Framer Motion",
                        "Three.js",
                    ]}
                </TagCloud>
            </section>

        </main>
    )
}