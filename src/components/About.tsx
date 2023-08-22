import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">a propos de moi.</h2>
            <h3 className="h3 mb-4">Développeur Full-stack</h3>
            <p className="mb-6 text-justify">
              Je suis un développeur web full-stack établi à Orléans, en France,
              avec une passion profonde pour la création et la mise en œuvre de
              sites web et d'applications de haute qualité. Mon engagement
              envers l'excellence dans la conception et le développement se
              reflète dans chaque projet que j'aborde. Ma détermination à rester
              à la pointe des dernières avancées technologiques m'incite à
              constamment me perfectionner et à adopter de nouvelles
              compétences. Les défis complexes sont pour moi autant d'occasions
              d'apprendre et de grandir. En somme, mon objectif est de
              collaborer avec vous pour concrétiser vos idées en solutions web
              innovantes et performantes.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Années <br />
                  D'experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projets <br />
                  Completés
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">
                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className=""
                >
                  Me contacter
                </Link>
              </button>
              <a href="#" className="text-gradient btn-link">
                <Link
                  to="work"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className=""
                >
                  Portfolio
                </Link>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
