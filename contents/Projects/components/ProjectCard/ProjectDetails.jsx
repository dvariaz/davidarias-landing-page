import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

const ProjectDetails = ({ id, background, onClick }) => {
    return (
        <div className={`${styles.container} ${styles.open}`}>
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
                initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                animate={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                }}
                exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                className={styles.overlay}
            ></motion.div>
        </div>
    );
};

export default ProjectDetails;
