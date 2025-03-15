import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedSection = ({ 
  children, 
  direction = "up", // "up", "down", "left", "right", "zoom-in", "zoom-out", "fade", "rotate"
  delay = 0 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Define animation variants dynamically based on "direction" type
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
      {children}
    </motion.div>
  );
};

// Helper to return the correct hidden variant based on direction
const getHiddenVariant = (direction) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 50 };
    case "down":
      return { opacity: 0, y: -50 };
    case "left":
      return { opacity: 0, x: 50 };
    case "right":
      return { opacity: 0, x: -50 };
    case "zoom-in":
      return { opacity: 0, scale: 0.8 };
    case "zoom-out":
      return { opacity: 0, scale: 1.2 };
    case "rotate":
      return { opacity: 0, rotate: -10 }; // slight rotation
    case "flip":
      return { opacity: 0, rotateY: 90 }; // horizontal flip
    case "fade": // just fade without motion
      return { opacity: 0 };
    default:
      return { opacity: 0, y: 50 }; // Default to 'up'
  }
};

export default AnimatedSection;
