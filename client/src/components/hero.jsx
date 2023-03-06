import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";


export default function Hero() {
    return (
        <main className="w-screen h-screen flex text-white bg-black mobile:flex-col">
            <section className="basis-1/2 flex flex-col justify-center items-center">
                <h1 className="text-7xl">Edificio 23</h1>
                <p>Build Innovate Connect</p>
            </section>

            <section className="basis-1/2 text-white flex justify-center items-center">
                <TagCloud
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