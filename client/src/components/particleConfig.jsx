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
            particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: '#fff'
                },
                shape: {
                  type: 'circle',
                  stroke: {
                    width: 0,
                    color: '#ff0000'
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: '',
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                  }
                },
                size: {
                  value: 1,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 3,
                    size_min: 0,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 100,
                  color: '#fff',
                  opacity: 1,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                  }
                },
                array: []
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab'
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  },
                  resize: true
                },
                modes: {
                  grab:{
                    distance: 100,
                    line_linked:{
                      opacity: 1
                    }
                  },
                  bubble:{
                    distance: 200,
                    size: 80,
                    duration: 0.4
                  },
                  repulse:{
                    distance: 200,
                    duration: 0.4
                  },
                  push:{
                    particles_nb: 4
                  },
                  remove:{
                    particles_nb: 2
                  }
                },
                mouse:{}
              },
              retina_detect: false
            }}
      />
    )
}