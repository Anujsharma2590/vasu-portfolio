import React from 'react'
import { motion } from "framer-motion";
import './Home.css'
const ScrollDown = () => {
    return (
      <div className="scroll-down">
        <a href="#about" className="mouse-wrapper">
          <div className="mincontainer">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="inner-circle"
            />
          </div>
        </a>
      </div>
    );
}

export default ScrollDown