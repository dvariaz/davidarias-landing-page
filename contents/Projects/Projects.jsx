import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./Projects.module.scss";

import ProjectCard from "./components/ProjectCard";
import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

const Projects = ({ projects }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    const openProject = (project) => {
        setProjectOpen(project);
        setIsOpen(true);
        lockScroll();
    };

    const closeProject = (id) => {
        setProjectOpen(null);
        setIsOpen(false);
        unlockScroll();
    };

    const lockScroll = () => {
        document.documentElement.style.overflow = "hidden";
    };

    const unlockScroll = () => {
        document.documentElement.style.overflow = "";
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
                            onClick={() => openProject(project)}
                        />
                    ))}
                </div>
                <AnimatePresence>
                    {isOpen && projectOpen && (
                        <ProjectCardDetails
                            id={projectOpen.id}
                            name={projectOpen.name}
                            date={projectOpen.date}
                            description={projectOpen.description}
                            background={projectOpen.cover}
                            url={projectOpen.url}
                            onClick={() => closeProject()}
                        />
                    )}
                </AnimatePresence>
            </section>
        </AnimateSharedLayout>
    );
};

export default Projects;
