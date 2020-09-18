import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./Projects.module.scss";

import ProjectCard from "./components/ProjectCard";
import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

const Projects = ({ projects }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    const openProject = (id, cover) => {
        setProjectOpen({ id, cover });
        setIsOpen(true);
    };

    const closeProject = (id) => {
        setProjectOpen(null);
        setIsOpen(false);
    };

    return (
        <AnimateSharedLayout type="crossfade">
            <section className={styles.body}>
                <h1 className={styles.title}>Proyectos</h1>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            background={project.cover}
                            onClick={() => openProject(project.id, project.cover)}
                        />
                    ))}
                </div>
                <AnimatePresence>
                    {isOpen && projectOpen && (
                        <ProjectCardDetails
                            id={projectOpen.id}
                            background={projectOpen.cover}
                            onClick={() => closeProject()}
                        />
                    )}
                </AnimatePresence>
            </section>
        </AnimateSharedLayout>
    );
};

export default Projects;
