import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         PORTFOLIO
        </motion.span>
        <div className="social">
          <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=albimukti97@gmail.com">
            <img src="/gmail.png" alt="" />
          </a>
          <a href="https://wa.me/085885920126">
            <img src="/whatsap1.png" alt="" />
          </a>
          <a href="https://gitlab.com/albimukti">
            <img src="/gitlab.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/albi-mukti-b19a021b6/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
