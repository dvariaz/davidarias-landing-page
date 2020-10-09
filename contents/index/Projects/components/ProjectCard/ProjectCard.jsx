import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ id, background, onClick, disabled }) => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.body}
                onClick={onClick}
                layoutId={`project-card-${id}-body`}
                style={disabled ? { pointerEvents: "none" } : { pointerEvents: "all" }}
            >
                <motion.div className={styles.hero} layoutId={`project-card-${id}-hero`}>
                    {/* <span className={styles.label}>{name}</span> */}
                    <motion.img
                        whileHover={{ scale: 1.3, rotate: -4 }}
                        transition={{ duration: 0.3 }}
                        src={background}
                        draggable="false"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
