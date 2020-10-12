import { useState } from "react";
import { useQuery } from "react-query";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./AboutMe.module.scss";

import DotCarousel from "./components/DotCarousel";
import Divider from "../../../components/Divider";
import PulseLoader from "react-spinners/PulseLoader";

//TODO: Revisar los handle y utilizar useCallback
const AboutMe = ({ id }) => {
    const [background, setBackground] = useState(0);

    const { isLoading, error, data } = useQuery(
        "storiesData",
        () => fetch("/api/stories").then((res) => res.json()),
        { retry: false }
    );

    const handlePageChange = (value) => {
        setBackground(value);
    };

    const backgroundVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const backgroundTransition = {
        type: "tween",
        duration: 0.5,
    };

    const renderBackground = (index) => (
        <AnimatePresence exitBeforeEnter>
            <motion.picture
                key={background}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backgroundVariants}
                transition={backgroundTransition}
            >
                <source
                    media="(min-width: 1921px)"
                    srcSet={data?.stories[index].background.urls.large}
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet={data?.stories[index].background.urls.medium}
                />
                <source srcSet={data?.stories[index].background.urls.small} />
                <motion.img
                    key={background}
                    initial="hidden"
                    exit="hidden"
                    variants={backgroundVariants}
                    transition={backgroundTransition}
                    src={data?.stories[index].background.urls.medium}
                    alt={data?.stories[index].background.name}
                />
            </motion.picture>
        </AnimatePresence>
    );

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
            <div className={styles.background}>{!isLoading && renderBackground(background)}</div>
            <Divider />
        </section>
    );
};

export default AboutMe;
