import { useState, useRef, useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GridLoader from "react-spinners/GridLoader";

import styles from "./Projects.module.scss";

import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

//Hooks
import useKeyTrigger from "../../../hooks/useKeyTrigger";

//Projects
import { ProjectGrid, ProjectGridSkeleton } from "./components/ProjectGrid";

//Utils
import { lockScroll, unlockScroll } from "../../../utils/dom.js";

//TODO: Revisar los handle y utilizar useCallback
const Projects = ({ id }) => {
    const ref = useRef();
    console.log("render");

    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    const { isLoading, error, data } = useQuery(
        "projectsData",
        () => fetch("/api/projects").then((res) => res.json()),
        { retry: false, refetchOnWindowFocus: false }
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

    if (error) {
        return (
            <section id={id} className={styles.body}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Proyectos</h1>
                    <ProjectGridSkeleton />
                </div>
            </section>
        );
    }

    return (
        <AnimateSharedLayout type="crossfade">
            <section id={id} className={styles.body} ref={ref}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Proyectos</h1>
                    {isLoading ? (
                        <div className={styles.loadingContent}>
                            <GridLoader
                                size={50}
                                color={"rgba(255, 255, 255, 0.1)"}
                                loading={isLoading}
                            />
                        </div>
                    ) : (
                        <ProjectGrid
                            rootRef={ref}
                            projects={data.projects}
                            handleProjectClick={handleProjectClick}
                        />
                    )}
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
