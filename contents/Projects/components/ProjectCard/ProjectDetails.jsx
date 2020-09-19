import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

const ProjectDetails = ({ id, name, date, description, background, url, onClick }) => {
    const descriptionVariants = {
        visible: {
            background: "#04091B",
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
            <div>
                <motion.div
                    className={styles.body}
                    layoutId={`project-card-${id}-body`}
                    onClick={onClick}
                >
                    <motion.div className={styles.hero} layoutId={`project-card-${id}-hero`}>
                        <img src={background} />
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
                        <a href={url} target="_blank" className={styles.link}>
                            Ver más acerca de este proyecto
                        </a>
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
