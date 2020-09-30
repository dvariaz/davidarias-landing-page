import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ id, name, background, onClick, disabled }) => {
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
                    <img src={background} draggable="false" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
