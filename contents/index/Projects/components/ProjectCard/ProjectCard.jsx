import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({ id, thumbnail, background, onClick, disabled }) => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.body}
                onClick={onClick}
                layoutId={`project-card-${id}-body`}
                style={disabled ? { pointerEvents: "none" } : { pointerEvents: "all" }}
                layout
            >
                <motion.div className={styles.hero}>
                    {/* <span className={styles.label}>{name}</span> */}
                    <motion.picture layoutId={`project-card-${id}-thumbnail`}>
                        <img src={thumbnail.src_2x} draggable="false" />
                    </motion.picture>
                </motion.div>
            </motion.div>
        </div>
    );
};

export const ProjectCardSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.body} ${styles.skeleton}`}></div>
        </div>
    );
};
