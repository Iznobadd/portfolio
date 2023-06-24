import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import { FaGit, FaNode, FaReact } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
const services = [
  {
    name: "React.js",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi perspiciatis adipisci.",
  },
  {
    name: "Node.js",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi perspiciatis adipisci.",
  },
  {
    name: "GraphQL",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi perspiciatis adipisci.",
  },
  {
    name: "Git",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, commodi perspiciatis adipisci.",
  },
];
export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Mes compétences.</h2>
            <h3 className="h3 max-w-[455px] mb-16">Développeur Full-stack</h3>
            <button className="btn btn-sm">
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                className=""
              >
                Mon Portfolio
              </Link>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center text-[40px]">
                      <a href="#" className="">
                        {name === "React.js" && <FaReact />}
                        {name === "Node.js" && <FaNode />}
                        {name === "GraphQL" && <SiGraphql />}
                        {name === "Git" && <FaGit />}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
