import { useState } from "react";
import { useQuery } from "react-query";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./AboutMe.module.scss";

import DotCarousel from "./components/DotCarousel";
import Divider from "../../../components/Divider";

//TODO: Revisar los handle y utilizar useCallback
const AboutMe = ({ id }) => {
    const [background, setBackground] = useState(0);

    const { isLoading, error, data } = useQuery("storiesData", () =>
        fetch("/api/stories").then((res) => res.json())
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
                    srcSet={data.stories[index].background.urls.large}
                />
                <source
                    media="(min-width: 1024px)"
                    srcSet={data.stories[index].background.urls.medium}
                />
                <source srcSet={data.stories[index].background.urls.small} />
                <motion.img
                    key={background}
                    initial="hidden"
                    exit="hidden"
                    variants={backgroundVariants}
                    transition={backgroundTransition}
                    src={data.stories[index].background.urls.medium}
                    alt={data.stories[index].background.name}
                />
            </motion.picture>
        </AnimatePresence>
    );

    if (isLoading) return "Cargando..";

    if (error) return "Ha ocurrido un error" + error.message;

    return (
        <section id={id} className={styles.body}>
            <Divider top />
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre mi</h1>
                <div className={styles.description}>
                    <DotCarousel items={data.stories} onPageChange={handlePageChange} />
                </div>
            </div>
            <div className={styles.background}>{renderBackground(background)}</div>
            <Divider />
        </section>
    );
};

export default AboutMe;
