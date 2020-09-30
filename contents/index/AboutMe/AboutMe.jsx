import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./AboutMe.module.scss";

import DotCarousel from "./components/DotCarousel";
import Divider from "../../../components/Divider";

const AboutMe = ({ id, stories }) => {
    const [background, setBackground] = useState(0);

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
                <source media="(min-width: 1921px)" srcSet={stories[index].background.urls.large} />
                <source
                    media="(min-width: 1024px)"
                    srcSet={stories[index].background.urls.medium}
                />
                <source srcSet={stories[index].background.urls.small} />
                <motion.img
                    key={background}
                    initial="hidden"
                    exit="hidden"
                    variants={backgroundVariants}
                    transition={backgroundTransition}
                    src={stories[index].background.urls.medium}
                    alt={stories[index].background.name}
                />
            </motion.picture>
        </AnimatePresence>
    );
    return (
        <section id={id} className={styles.body}>
            <Divider top />
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre mi</h1>
                <div className={styles.description}>
                    <DotCarousel items={stories} onPageChange={handlePageChange} />
                </div>
            </div>
            <div className={styles.background}>{renderBackground(background)}</div>
            <Divider />
        </section>
    );
};

export default AboutMe;
