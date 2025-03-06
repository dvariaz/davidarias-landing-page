'use client';
import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

//Hooks
import useKeyTrigger from "@/modules/shared/hooks/useKeyTrigger";

//Components
import ProjectDetails from "@/modules/projects/components/ProjectDetails";
import { ProjectCard } from "@/modules/projects/components/ProjectCard";

const ProjectGrid = ({ projects, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [projectOpen, setProjectOpen] = useState(null);

    useKeyTrigger(() => {
        if (!isOpen) {
            closeProject();
        }
    }, ["Escape", "Backspace"]);

    const openProject = (project) => {
        setProjectOpen(project);
        setIsOpen(true);
    };

    const closeProject = () => {
        setProjectOpen(null);
        setIsOpen(false);
    };

    const handleProjectClick = (project) => {
        openProject(project);
    };

    return (
        <>
            <div className={clsx("project-grid__body grid gap-8 lg:grid-flow-col lg:grid-rows-2", className)}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        name={project.name}
                        thumbnail={project.thumbnail}
                        background={project.cover}
                        onClick={() => handleProjectClick(project)}
                        className="w-full max-h-[360px] lg:w-[400px]"
                    />
                ))}
            </div>

            <AnimatePresence>
                {isOpen && projectOpen && (
                    <ProjectDetails
                        id={projectOpen.id}
                        name={projectOpen.name}
                        date={projectOpen.date}
                        status={projectOpen.status}
                        description={projectOpen.description}
                        thumbnail={projectOpen.thumbnail}
                        background={projectOpen.cover}
                        url={projectOpen.url}
                        behance={projectOpen.behance}
                        className="absolute top-0 left-0 w-full h-screen"
                        onClick={() => closeProject()}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectGrid;
