import styles from "./Projects.module.scss";

const Projects = ({ projects }) => {
    return (
        <section className={styles.body}>
            <h1 className={styles.title}>Proyectos</h1>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.project}>
                        <img src={project.cover} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
