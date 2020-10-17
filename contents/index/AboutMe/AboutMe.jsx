import { useState } from "react";
import { useQuery } from "react-query";

import styles from "./AboutMe.module.scss";

import DotCarousel from "./components/DotCarousel";
import Divider from "../../../components/Divider";
import PulseLoader from "react-spinners/PulseLoader";
import StoryBackground from "./components/StoryBackground/StoryBackground";

//TODO: Revisar los handle y utilizar useCallback
const AboutMe = ({ id }) => {
    const [index, setIndex] = useState(0);

    const { isLoading, error, data } = useQuery(
        "storiesData",
        () => fetch("/api/stories").then((res) => res.json()),
        { retry: false }
    );

    const handlePageChange = (pageIndex) => {
        setIndex(pageIndex);
    };

    if (error) {
        return (
            <section id={id} className={styles.body}>
                <Divider top />
                <div className={styles.content}>
                    <h1 className={styles.title}>Sobre mi</h1>
                    <div className={styles.description}>
                        <p>{"Ha ocurrido un error cargando las historias, vuelve más tarde"}</p>
                    </div>
                </div>
                <Divider />
            </section>
        );
    }

    return (
        <section id={id} className={styles.body}>
            <Divider top />
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre mi</h1>
                {isLoading ? (
                    <div className={styles.loadingContent}>
                        <PulseLoader
                            size={15}
                            color={"rgba(255, 255, 255, 0.25)"}
                            loading={isLoading}
                        />
                    </div>
                ) : (
                    <div className={styles.description}>
                        <DotCarousel items={data?.stories} onPageChange={handlePageChange} />
                    </div>
                )}
            </div>
            <div className={styles.background}>
                {!isLoading && (
                    <StoryBackground
                        name={data?.stories[index].background.name}
                        urls={data?.stories[index].background.urls}
                    />
                )}
            </div>
            <Divider />
        </section>
    );
};

export default AboutMe;
