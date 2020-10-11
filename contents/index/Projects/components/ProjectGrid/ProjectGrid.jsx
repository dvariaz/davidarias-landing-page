import { useContext, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import styles from "./ProjectGrid.module.scss";

//Context
import { ViewportContext } from "../../../../../context/ViewportContext";

//Components
import { ProjectCard, ProjectCardSkeleton } from "../../components/ProjectCard";

export const ProjectGrid = ({ rootRef, projects, handleProjectClick }) => {
    const [isDragging, setIsDragging] = useState(false);
    const { centerViewport } = useContext(ViewportContext);

    const handleScrollStart = () => {
        setIsDragging(true);
        centerViewport(rootRef.current.offsetTop);
    };

    const handleScrollEnd = () => {
        setIsDragging(false);
    };

    return (
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
                        background={project.cover}
                        onClick={() => handleProjectClick(project)}
                        disabled={isDragging}
                    />
                ))}
            </ScrollContainer>
        </div>
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
