import { useState, useEffect, useContext } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import ScrollContainer from "react-indiana-drag-scroll";

import styles from "./ProjectGrid.module.scss";

//Hooks
import useKeyTrigger from "../../../../../hooks/useKeyTrigger";

//Context
import { ViewportContext } from "../../../../../context/ViewportContext";

//Components
import ProjectCardDetails from "../ProjectCard/ProjectDetails";
import { ProjectCard, ProjectCardSkeleton } from "../ProjectCard";

//Utils
import { lockScroll, unlockScroll } from "../../../../../utils/dom.js";

//TODO: Revisar los handle y utilizar useCallback

export const ProjectGrid = ({ rootRef, projects }) => {
    const [isDragging, setIsDragging] = useState(false);
    const { centerViewport } = useContext(ViewportContext);

    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    useKeyTrigger(() => {
        if (!isOpen) {
            closeProject();
        }
    }, ["Escape", "Backspace"]);

    const handleScrollStart = () => {
        setIsDragging(true);
        centerViewport(rootRef.current.offsetTop);
    };

    const handleScrollEnd = () => {
        setIsDragging(false);
    };

    const openProject = (project) => {
        setProjectOpen(project);
        setIsOpen(true);
        lockScroll();
    };

    const closeProject = () => {
        setProjectOpen(null);
        setIsOpen(false);
        unlockScroll();
    };

    const handleProjectClick = (project) => {
        openProject(project);
    };

    return (
        <AnimateSharedLayout type="crossfade">
            <div className={styles.body}>
                <ScrollContainer
                    onStartScroll={handleScrollStart}
                    onEndScroll={handleScrollEnd}
                    hideScrollbars={false}
                    className={styles.track}
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            thumbnail={project.thumbnail}
                            background={project.cover}
                            onClick={() => handleProjectClick(project)}
                            disabled={isDragging}
                        />
                    ))}
                </ScrollContainer>
            </div>
            <AnimatePresence>
                {isOpen && projectOpen && (
                    <ProjectCardDetails
                        id={projectOpen.id}
                        name={projectOpen.name}
                        date={projectOpen.date}
                        status={projectOpen.status}
                        description={projectOpen.description}
                        thumbnail={projectOpen.thumbnail}
                        background={projectOpen.cover}
                        url={projectOpen.url}
                        behance={projectOpen.behance}
                        onClick={() => closeProject()}
                    />
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

export const ProjectGridSkeleton = () => {
    return (
        <div className={styles.body}>
            <div className={styles.info}>
                <p>Hubo un problema al cargar los proyectos, vuelve más tarde</p>
            </div>
            <div className={styles.track}>
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
                <ProjectCardSkeleton />
            </div>
        </div>
    );
};
