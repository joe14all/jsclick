import styles from './ProjectItem.module.css';

const ProjectItem = ({ project, onProjectSelect }) => {
  if (!project) return null;

  return (
    <div 
      className={styles.projectItem}
      onClick={() => onProjectSelect(project)}
    >
      <img 
        src={project.thumbnail.img} 
        alt={project.thumbnail.alt} 
        className={styles.projectThumbnail}
      />
      <div className={styles.projectOverlay}>
        <h3>{project.title}</h3>
        <button className={styles.primaryBtn}>
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
