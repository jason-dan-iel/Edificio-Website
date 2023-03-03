import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesConfig() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
  
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              background: {
                  color: {
                      value: "#12263f",
                  },
              },
              fullScreen: {
                zIndex: -1,
                enable: true,
              },
              fpsLimit: 120,
              interactivity: {
                  events: {
                      onClick: {
                          enable: false,
                          mode: "push",
                      },
                      onHover: {
                          enable: false,
                          mode: "repulse",
                      },
                      resize: true,
                  },
                  modes: {
                      push: {
                          quantity: 4,
                      },
                      repulse: {
                          distance: 200,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#000000",
                  },
                  links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: false,
                      opacity: 0.05,
                      width: 1,
                  },
                  collisions: {
                      enable: false,
                  },
                  move: {
                      directions: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 6,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 5,
                  },
                  opacity: {
                      value: 0.2,
                  },
                  shape: {
                      type: 'polygon',
                      polygon: {
                        sides: 4,
                      }
                  },
                  size: {
                      value: 150,
                  },
              },
              detectRetina: true,
          }}
      />
    )
}