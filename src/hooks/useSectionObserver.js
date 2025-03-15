import { useEffect, useState } from "react";

const useSectionObserver = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Adjust observer settings dynamically based on screen size
    const isMobile = window.innerWidth < 768;
    const options = {
      root: null,
      rootMargin: isMobile ? "-10% 0px -65% 0px" : "-10% 0px -50% 0px", // Adjust for mobile
      threshold: isMobile ? 0.05 : 0.3, // Lower threshold for mobile
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, [sectionIds]);

  return activeSection;
};

export default useSectionObserver;
