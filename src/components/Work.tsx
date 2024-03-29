import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/mockup-riad.jpg";
import Img2 from "../assets/mockup-netflix.jpg";
import Img3 from "../assets/mockup-portfolio.jpg";

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-24 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                Mes derniers
                <br /> Projets.
              </h2>
              <p className="max-w-sm mb-9">
                Chaque projet est le fruit d'une approche créative et technique,
                visant à offrir des expériences utilisateur exceptionnelles.
                Explorez ces réalisations pour découvrir mon expertise
                développement web.
              </p>
              <button className="btn btn-sm">
                <a href="https://github.com/Iznobadd" target="_blank">
                  Voir tous mes projets
                </a>
              </button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                href="https://riad-malaika-essaouira.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt="Mockup Riad Malaïka"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Riad Malaïka</span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a
                href="https://github.com/Iznobadd/netflix-clone"
                target="_blank"
                rel="noreferrer"
              >
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt="Mockup Netflix Clone"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">
                    React | GraphQL | Tailwind
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">Netflix Clone</span>
                </div>
              </a>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <a href="./">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt="Mockup Portfolio"
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                  <span className="text-gradient">React | Tailwind</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                  <span className="text-3xl text-white">
                    Portfolio Brandon CEBI
                  </span>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
