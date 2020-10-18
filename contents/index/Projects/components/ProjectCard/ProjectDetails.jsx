import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

//Components
import Button from "../../../../../components/Button";
import Chip from "../../../../../components/Chip";
import { StatusIndicator } from "../../../../../components/Indicators";
import MoonLoader from "react-spinners/MoonLoader";

//Utils
import { translateStatus } from "../../../../../utils/enums";

const ProjectDetails = ({
    id,
    name,
    date,
    status,
    description,
    thumbnail,
    background,
    url,
    behance,
    onClick,
}) => {
    const [isCoverLoaded, setIsCoverLoaded] = useState(false);

    const descriptionVariants = {
        visible: {
            background: "#03050c",
            opacity: 1,
        },
        hidden: {
            background: "rgba(0,0,0,0)",
            opacity: 0,
        },
    };

    const textVariants = {
        visible: {
            opacity: 1,
            transition: {
                type: "tween",
                delay: 0.15,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                type: "tween",
            },
        },
    };

    return (
        <div className={`${styles.container} ${styles.open}`}>
            <div className={styles.headerContainer}>
                <motion.div
                    className={styles.body}
                    layoutId={`project-card-${id}-body`}
                    onClick={onClick}
                >
                    <motion.div className={styles.hero} layoutId={`project-card-${id}-hero`}>
                        <motion.button
                            initial={{ y: -150, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -150, opacity: 0 }}
                            transition={{ delay: 0.3 }}
                            className={styles.closeButton}
                        >
                            <img src="/assets/icons/close_icon.svg" />
                        </motion.button>
                        <div className={styles.bottomInfo}>
                            <Chip indicatorColor="green">
                                <div className={styles.status}>
                                    <span>{translateStatus(status)}</span>
                                    <StatusIndicator status={status} />
                                </div>
                            </Chip>
                        </div>
                        {!isCoverLoaded && <MoonLoader size={100} color="white" />}
                        <motion.img
                            animate={isCoverLoaded && { opacity: 1 }}
                            src={background}
                            draggable="false"
                            onLoad={() => setIsCoverLoaded(true)}
                            className={styles.fullSizeImage}
                        />
                        <img src={thumbnail} draggable="false" />
                    </motion.div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={descriptionVariants}
                    transition={{ staggerChildren: 0.1 }}
                    className={styles.description}
                >
                    <motion.h2 variants={textVariants}>{name}</motion.h2>
                    <div className={styles.descriptionContainer}>
                        <span>{date}</span>

                        {description.map((paragraph, index) => (
                            <motion.p key={index} variants={textVariants}>
                                {paragraph}
                            </motion.p>
                        ))}
                        <div className={styles.actions}>
                            {behance && (
                                <Button
                                    type="light"
                                    href={behance}
                                    target="_blank"
                                    prefix="/assets/icons/behance_icon.svg"
                                >
                                    Ver en Behance
                                </Button>
                            )}
                            {url && (
                                <Button type="light" href={url} target="_blank">
                                    Ir al proyecto
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                animate={{
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                }}
                exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                className={styles.overlay}
            ></motion.div>
        </div>
    );
};

export default ProjectDetails;
