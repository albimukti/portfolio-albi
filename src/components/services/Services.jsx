import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <p>WHAT ARE MY ADVANTAGES?</p>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Technical Proficiency </h2>
          <p>
          I have a strong foundation in various programming languages 
          and development tools, allowing me to craft efficient and effective software solutions.
           My technical skills enable me to build robust and scalable applications.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Creativity</h2>
          <p>
          I thrive on creative problem-solving. I enjoy exploring different 
          angles and thinking outside the box to devise innovative solutions to complex challenges. 
          My ability to approach problems with creativity helps me stand out as a programmer.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Precision and Perseverance</h2>
          <p>

          Attention to detail is my second nature. I meticulously review my code to ensure it is error-free, recognizing that small errors can lead to significant issues. In addition, 
          my determination allows me to persistently tackle difficult problems and conquer stubborn bugs.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Communication Skills </h2>
          <p>
          Beyond my coding skills, I possess strong communication abilities. 
          I can articulate my ideas clearly, discuss issues with team members effectively, and convey solutions to various stakeholders. 
          My communication skills facilitate smooth collaboration and understanding within the team.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
