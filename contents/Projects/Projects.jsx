import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./Projects.module.scss";

import ProjectCard from "./components/ProjectCard";
import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

import useOnScreen from "../../hooks/useOnScreen";

const Projects = ({ projects }) => {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);
    const isVisible = useOnScreen(ref, "0px", 0.95);

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
            <section className={styles.body} ref={ref}>
                <h1 className={styles.title}>Proyectos</h1>
                <motion.div
                    animate={
                        isVisible
                            ? { opacity: 1, overflowY: "scroll" }
                            : { opacity: 0.4, overflowY: "hidden" }
                    }
                    className={styles.grid}
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            background={project.cover}
                            onClick={() => openProject(project)}
                        />
                    ))}
                </motion.div>
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
