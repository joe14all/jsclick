import React, { useState } from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import FilterButtons from '../../components/PortfolioSection/FilterButtons/FilterButton';
import SearchBar from '../../components/PortfolioSection/SearchBar/SearchBar';
import portfolioData from '../../components/PortfolioSection/PortfolioData';
import ProjectItem from '../../components/PortfolioSection/ProjectGallery/ProjectItem';
import ProjectModal from '../../components/PortfolioSection/ProjectModals/ProjectModal';
import styles from './Portfolio.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { removeStopwords } from 'stopword';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const extractMeaningfulWords = (projects) => {
    const allText = projects.flatMap(project => {
      const texts = [];
  
      // Title & categories
      if (project.title) texts.push(project.title);
      if (project.categories) texts.push(...project.categories);
  
      // Carousel captions, alt, tags
      project.caseStudy?.carousel?.forEach(item => {
        if (item.caption) texts.push(item.caption);
        if (item.alt) texts.push(item.alt);
        if (item.tags) texts.push(...item.tags);
      });
  
      // Sections: overview, challenges, etc.
      const stringifiedSections = JSON.stringify(project.caseStudy?.sections || {});
      texts.push(stringifiedSections);
  
      return texts;
    });
  
    // Flatten, clean, and filter
    const words = allText
      .join(' ')
      .toLowerCase()
      .match(/\b[a-z]{3,}\b/g); // Keep only 3+ letter words
  
    const filtered = removeStopwords(words || []);
    const unique = Array.from(new Set(filtered));
    return unique;
  };

  const allTags = extractMeaningfulWords(portfolioData);

  const searchedProjects = portfolioData.filter(project => {
    if (!searchQuery.trim()) return true;
  
    const searchableText = [];
  
    // Include title and categories
    if (project.title) searchableText.push(project.title);
    if (project.categories) searchableText.push(...project.categories);
  
    // Include carousel info
    project.caseStudy?.carousel?.forEach(item => {
      if (item.caption) searchableText.push(item.caption);
      if (item.alt) searchableText.push(item.alt);
      if (item.tags) searchableText.push(...item.tags);
    });
  
    // Include sections
    const sectionText = JSON.stringify(project.caseStudy?.sections || {});
    searchableText.push(sectionText);
  
    const combined = searchableText.join(' ').toLowerCase();
    return combined.includes(searchQuery.toLowerCase());
  });
  
  
  const filteredProjects = searchedProjects.filter(project =>
    activeFilter === 'all' ? true : project.categories.includes(activeFilter)
  );

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setSearchQuery('');
  };
  
  
  
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
      <div className={styles.topSection}>
        <h2 className={styles.heading}>Showcase of My Best Work</h2>

        <div className={styles.controls}>
          <SearchBar query={searchQuery} setQuery={setSearchQuery} suggestions={allTags} />
          <FilterButtons
            activeFilter={activeFilter}
            setActiveFilter={handleFilterClick}
          />
        </div>
      </div>


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
