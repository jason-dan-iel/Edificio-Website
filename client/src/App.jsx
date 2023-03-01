import { useState } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


const App = () => {
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
    <div>
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              background: {
                  color: {
                      value: "#0d47a1",
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
                          enable: true,
                          mode: "push",
                      },
                      onHover: {
                          enable: true,
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
                      value: "#ffffff",
                  },
                  links: {
                      color: "#ffffff",
                      distance: 150,
                      enable: true,
                      opacity: 0.5,
                      width: 1,
                  },
                  collisions: {
                      enable: true,
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
                      value: 80,
                  },
                  opacity: {
                      value: 0.5,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 5 },
                  },
              },
              detectRetina: true,
          }}
      />

      <div className='text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae iusto harum eligendi non veritatis vitae fuga inventore? Cumque quos magnam optio ullam vitae earum cum accusantium temporibus perferendis, asperiores tempore deleniti obcaecati minima ducimus quasi. Debitis quo ducimus dolores, alias nesciunt perferendis id esse sed illo magni libero eius recusandae sunt omnis quis aliquam nam at minima porro ipsum dolorum eum est consequatur. Eveniet, fugit autem? Quos at velit numquam ipsa dolorem necessitatibus ad aliquam voluptatem alias. Quod cum laborum quae ad, voluptatem optio adipisci et maxime qui. Enim dignissimos velit commodi repudiandae rerum maiores eligendi necessitatibus, ea autem, quia ullam impedit corrupti veritatis! Laboriosam cupiditate rerum nam et, similique, distinctio nemo commodi quia explicabo, error animi sint! Asperiores natus eveniet veritatis repellat! Quis dolor quo neque suscipit id et ipsa autem commodi odit, eaque, non a labore perferendis velit ducimus molestiae nobis in. Sapiente iure minus aspernatur animi maiores eos, porro praesentium explicabo officia repudiandae maxime quasi ad ea ipsum reprehenderit enim dicta neque quidem placeat dolorum impedit possimus iusto. Quaerat impedit ullam ab eveniet ex repellat molestiae numquam, maiores porro autem, temporibus cum nostrum dolore reiciendis eaque adipisci quis deserunt? Quam, quia porro obcaecati aliquam excepturi incidunt, iure necessitatibus at odit facere quas illum ad dolorum unde laborum sunt esse vel mollitia perferendis maiores alias reiciendis! Nulla fugit reiciendis suscipit molestias nihil commodi asperiores autem? Praesentium aut illo ex temporibus ut ipsa soluta impedit tempore fuga minima molestias ipsum maiores, architecto aperiam fugiat, optio officia! Veniam rem nesciunt nam saepe, consectetur amet magni maiores ducimus corrupti architecto. Nam voluptatibus, accusamus repudiandae molestias autem ab sunt sapiente rerum optio voluptatem delectus a modi error totam tempore. Illo, adipisci non voluptatem dolore temporibus id magnam vitae ipsam accusantium fuga assumenda enim sunt maiores accusamus incidunt similique blanditiis porro velit odio! Assumenda quaerat a sint sequi distinctio harum iste sit laborum, sunt obcaecati. Voluptas porro amet praesentium perferendis mollitia, tempora eligendi dignissimos assumenda temporibus quidem officiis, illum debitis molestiae reprehenderit eius? Nulla sed facilis aliquid magnam assumenda voluptatum ex enim quos dignissimos possimus esse tempore quis, at veniam accusamus iste temporibus nisi sapiente numquam aliquam dolor. Cumque quam laudantium, quas minima nemo distinctio! Rerum eius voluptatum, temporibus quod unde quibusdam nulla expedita, totam, nisi nemo quo eos iste id nihil deleniti nesciunt ea. Ut ex autem enim molestias quod eveniet fuga maxime obcaecati laborum delectus magnam saepe facilis cupiditate ipsa nostrum, at illo earum sunt unde commodi quasi, asperiores alias dolorem? Odio neque in temporibus asperiores pariatur amet voluptatem quidem illum quis autem fuga, nam placeat sit officiis ab et repellat architecto delectus cupiditate sint ipsam sed possimus excepturi. Consequatur fugit officia accusantium illum tempora nisi id, molestias iure sint eaque itaque, velit dicta quas impedit optio similique unde quidem aut expedita rem sapiente dolor. Unde quam veniam illum tempore cum, delectus eos vero ab provident magni maiores nulla exercitationem. Quibusdam itaque temporibus alias! Eum at culpa delectus corporis, facilis aperiam sed amet tempora? Natus est esse corporis eaque cum fuga nisi porro sit, laudantium quae iusto, nulla ducimus error ut? Voluptate soluta, earum voluptatibus sequi quos doloremque vel corporis alias illum corrupti minus vero necessitatibus hic fuga. At, vel. Dicta praesentium commodi dignissimos deleniti provident quis quam, repudiandae in delectus nam voluptate, veniam sed aut voluptates expedita eos sequi. Dicta similique cum placeat quos sunt consectetur, fuga sint ipsam fugit illum at eos delectus, culpa iure? Quia accusantium obcaecati ut quam nostrum asperiores eum quod dicta expedita incidunt quibusdam iusto vitae, ipsum suscipit maiores eius commodi dolorum quasi dolore fugit, voluptates molestias qui aliquam. Facilis aut earum qui officiis in expedita voluptates ratione magnam culpa enim quod harum possimus, at consectetur dolore odio ab voluptate tenetur doloremque, neque illum, fugiat repellendus molestias soluta? Suscipit laboriosam iure aut vero odio nemo aliquid atque earum corporis inventore. Facilis exercitationem sit architecto necessitatibus aut itaque praesentium vitae ratione quo. Maiores corrupti sequi aperiam aspernatur repellat debitis nobis voluptate. Dolor porro iure excepturi autem ipsam sint, recusandae quia quis id voluptatibus itaque non, molestias ab dolorem minus est reprehenderit doloribus? Officiis similique sint necessitatibus inventore id non aspernatur corporis repellat fugiat perspiciatis illum nesciunt ducimus a ut eos adipisci est quis, dignissimos suscipit doloremque provident sequi, beatae esse! Sint, animi quos. Repudiandae repellendus perspiciatis totam! Atque quibusdam maiores nisi suscipit commodi veritatis dicta, debitis, illo enim perspiciatis delectus porro quasi repellat modi. Voluptate nam, commodi autem illum cum natus, ab fugiat repellat vero vel, voluptatibus neque incidunt debitis nemo tenetur earum ut quisquam laudantium animi delectus aspernatur impedit quam voluptatum. Labore ex tenetur itaque non ipsum maxime voluptatem optio amet animi esse quod distinctio fuga iusto ab repudiandae natus, quis repellat pariatur consequatur illo provident laborum. Optio alias harum libero reiciendis, inventore dignissimos voluptates commodi accusamus neque. Error, ex, accusamus harum voluptate magnam architecto non asperiores officiis maiores iste velit soluta ad animi deleniti. Doloremque aut dignissimos pariatur perferendis. Quo earum blanditiis illo ut expedita enim aperiam dignissimos iusto voluptatum consequatur? Architecto, laudantium. Veniam harum eligendi amet quo possimus saepe esse commodi reprehenderit! Similique, suscipit rem reiciendis quidem, eaque explicabo voluptatem, in veniam quae voluptatum aut iste unde! Incidunt adipisci fuga alias ducimus temporibus pariatur reprehenderit unde, voluptatibus dicta officiis perspiciatis quidem laborum dolor rerum vitae placeat voluptatem tenetur facilis quia consectetur! Molestiae quas eos maiores obcaecati placeat pariatur, maxime quis sit quaerat minus fugiat, tempore iusto itaque veritatis, quae veniam commodi fuga dolores odio velit delectus quisquam modi laborum cumque. Et eos porro asperiores ab rem tenetur numquam, totam unde incidunt! Consequuntur fuga minus dignissimos, rerum eos voluptate omnis nam iste repellendus odio laborum dolores sequi fugiat labore cumque. Alias vero aperiam distinctio officiis ut voluptas sint ex enim. Autem ea natus, vel deleniti hic aliquid? Corporis libero tenetur laudantium nam sequi vel! Dolorum nulla omnis, adipisci veritatis consectetur amet repellendus sed temporibus perferendis quos eos illum a molestiae nobis ducimus accusamus blanditiis voluptates in quidem ad quae reiciendis dolorem? Totam ratione doloremque magni exercitationem blanditiis debitis voluptas asperiores nemo rem facere.
      </div>
    </div>



  );
};

export default App
