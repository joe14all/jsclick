import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedSection = ({ 
  children, 
  direction = "up",
  delay = 0 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: getHiddenVariant(direction),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={variants} 
      style={{ visibility: inView ? "visible" : "hidden" }} // Ensures visibility
    >
      {children}
    </motion.div>
  );
};

const getHiddenVariant = (direction) => {
  const mobileOffset = window.innerWidth < 768 ? 20 : 50;
  switch (direction) {
    case "up": return { opacity: 0, y: mobileOffset };
    case "down": return { opacity: 0, y: -mobileOffset };
    case "left": return { opacity: 0, x: mobileOffset };
    case "right": return { opacity: 0, x: -mobileOffset };
    default: return { opacity: 0, y: mobileOffset };
  }
};

export default AnimatedSection;
