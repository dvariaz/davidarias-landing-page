import { useState, useRef, useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styles from "./Projects.module.scss";

import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

//Hooks
import useKeyTrigger from "../../../hooks/useKeyTrigger";

//Projects
import ProjectGrid from "./components/ProjectGrid";

//Utils
import { lockScroll, unlockScroll } from "../../../utils/dom.js";

//TODO: Revisar los handle y utilizar useCallback
const Projects = ({ id }) => {
    const ref = useRef();

    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    const { isLoading, error, data } = useQuery("projectsData", () =>
        fetch("/api/projects").then((res) => res.json())
    );

    useKeyTrigger(() => {
        if (!isOpen) {
            closeProject();
        }
    }, ["Escape", "Backspace"]);

    const handleProjectClick = (project) => {
        openProject(project);
    };

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

    if (isLoading) return "Cargando..";

    if (error) return "Ha ocurrido un error" + error.message;

    return (
        <AnimateSharedLayout type="crossfade">
            <section id={id} className={styles.body} ref={ref}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Proyectos</h1>
                    <ProjectGrid
                        rootRef={ref}
                        projects={data.projects}
                        handleProjectClick={handleProjectClick}
                    />
                </div>
                <AnimatePresence>
                    {isOpen && projectOpen && (
                        <ProjectCardDetails
                            id={projectOpen.id}
                            name={projectOpen.name}
                            date={projectOpen.date}
                            status={projectOpen.status}
                            description={projectOpen.description}
                            background={projectOpen.cover}
                            url={projectOpen.url}
                            behance={projectOpen.behance}
                            onClick={() => closeProject()}
                        />
                    )}
                </AnimatePresence>
            </section>
        </AnimateSharedLayout>
    );
};

export default Projects;
