import { useRef } from "react";
import { useQuery } from "react-query";
import GridLoader from "react-spinners/GridLoader";

import styles from "./Projects.module.scss";

//Projects
import { ProjectGrid, ProjectGridSkeleton } from "./components/ProjectGrid";

const Projects = ({ id }) => {
    const ref = useRef();

    const { isLoading, error, data } = useQuery(
        "projectsData",
        () => fetch("/api/projects").then((res) => res.json()),
        { retry: false, refetchOnWindowFocus: false }
    );

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
        <section id={id} className={styles.body} ref={ref}>
            <div className={styles.container}>
                <h1 className={styles.title}>Proyectos</h1>
                {isLoading ? (
                    <div className={styles.loadingContent}>
                        <GridLoader
                            size={30}
                            color={"rgba(255, 255, 255, 0.1)"}
                            loading={isLoading}
                        />
                    </div>
                ) : (
                    <ProjectGrid rootRef={ref} projects={data.projects} />
                )}
            </div>
        </section>
    );
};

export default Projects;
