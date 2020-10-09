import { useState, useRef, useEffect, useContext } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import ScrollContainer from "react-indiana-drag-scroll";
import styles from "./Projects.module.scss";

//Components
import ProjectCard from "./components/ProjectCard";
import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

//Context
import { ViewportContext } from "../../../context/ViewportContext";

//Hooks
import useOnScreen from "../../../hooks/useOnScreen";
import useKeyTrigger from "../../../hooks/useKeyTrigger";

//TODO: Revisar los handle y utilizar useCallback
const Projects = ({ id, projects }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref, "0px", 0.7);

    const [isDragging, setIsDragging] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    const { centerViewport } = useContext(ViewportContext);

    useKeyTrigger(() => {
        if (!isOpen) {
            closeProject();
        }
    }, ["Escape", "Backspace"]);

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

    const handleProjectClick = (project) => {
        if (isVisible) {
            openProject(project);
        } else {
            centerViewport(ref.current.offsetTop);
        }
    };

    const handleScrollStart = () => {
        setIsDragging(true);
        centerViewport(ref.current.offsetTop);
    };

    const handleScrollEnd = () => {
        setIsDragging(false);
    };

    return (
        <AnimateSharedLayout type="crossfade">
            <section id={id} className={styles.body} ref={ref}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Proyectos</h1>
                    <motion.div
                        animate={
                            isVisible
                                ? { opacity: 1, overflow: "scroll" }
                                : { opacity: 0.2, overflow: "hidden" }
                        }
                        className={styles.grid}
                    >
                        <ScrollContainer
                            onStartScroll={handleScrollStart}
                            onEndScroll={handleScrollEnd}
                            hideScrollbars={false}
                            className={styles.track}
                            style={isVisible ? { pointerEvents: "all" } : { pointerEvents: "none" }}
                        >
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    background={project.cover}
                                    onClick={() => handleProjectClick(project)}
                                    disabled={isDragging}
                                />
                            ))}
                        </ScrollContainer>
                    </motion.div>
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