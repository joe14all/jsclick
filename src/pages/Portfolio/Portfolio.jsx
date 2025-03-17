import React, { useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import FilterButtons from '../../components/PortfolioSection/FilterButtons/FilterButton';
import portfolioData from '../../components/PortfolioSection/PortfolioData';
import ProjectItem from '../../components/PortfolioSection/ProjectGallery/ProjectItem';
import ProjectModal from '../../components/PortfolioSection/ProjectModals/ProjectModal';
import styles from './Portfolio.module.css';
import { AnimatePresence, motion } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtered projects based on active category
  const filteredProjects = portfolioData.filter(project =>
    activeFilter === 'all' ? true : project.categories.includes(activeFilter)
  );

  // Handle project selection and open modal
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <MainLayout isHomePage={false} currentPage="Portfolio">
      <div className={styles.container}>
        {/* Heading */}
        <h2 className={styles.heading}>Showcase of My Best Work</h2>

        {/* Filter Buttons */}
        <FilterButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Projects Grid with Animations */}
        <motion.div 
          className={styles.portfolioGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectItem
                    project={project} // ✅ Pass a **single** project
                    onProjectSelect={handleProjectSelect}
                  />
                </motion.div>
              ))
            ) : (
              <p className={styles.noProjects}>No projects found in this category.</p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Selected Project */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <ProjectModal 
              project={selectedProject}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default Portfolio;
