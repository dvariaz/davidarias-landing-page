import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import ScrollContainer from "react-indiana-drag-scroll";
import styles from "./Projects.module.scss";

import ProjectCard from "./components/ProjectCard";
import ProjectCardDetails from "./components/ProjectCard/ProjectDetails";

import { useMediaQuery } from "@react-hook/media-query";
import useOnScreen from "../../../hooks/useOnScreen";

//TODO: Intentar usar grab cursor para hacer drag and drop
const Projects = ({ id, projects, centerViewport }) => {
    const ref = useRef();
    const isMobile = useMediaQuery("only screen and (max-width: 969px)");
    const isVisible = useOnScreen(ref, "0px", 0.7);

    const [isDragging, setIsDragging] = useState(false);
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

    const handleProjectClick = (project) => {
        if (isVisible) {
            openProject(project);
        } else {
            centerViewport(ref.current.offsetTop);
        }
    };

    function keyHandler({ key }) {
        if (!isOpen) {
            if (key === "Escape" || key === "Backspace") {
                closeProject();
            }
        }
    }

    //Para manejar acciones del usuario al cerrar modales
    useEffect(() => {
        window.addEventListener("keyup", keyHandler);

        return () => {
            window.removeEventListener("keyup", keyHandler);
        };
    }, []);

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
