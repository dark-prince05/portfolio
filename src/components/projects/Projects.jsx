import styles from "./projects.module.css";
import getProjects from "../getProjects.js";

export default function Projects() {
  const projectList = getProjects();

  return (
    <section id="projects">
      <h2 className={styles.title}>
        My <span>Projects</span>
      </h2>
      <div className={styles.projectsContainer}>
        {projectList.map((project) => (
          <div key={project.id} className={styles.project}>
            <img
              className={styles.projImg}
              src={project.image}
              alt={project.title}
            />
            <div>
              <h3 className={styles.projTitle}>{project.title}</h3>
              <div className={styles.techStack}>
                <b>Tech Stack:</b> {project.tech}
              </div>
              <p className={styles.projDesc}>{project.desc}</p>
              <div className={styles.buttons}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
