import { motion } from "framer-motion";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ id, name, background, onClick }) => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.body}
                onClick={onClick}
                layoutId={`project-card-${id}-body`}
            >
                <motion.div className={styles.hero} layoutId={`project-card-${id}-hero`}>
                    <img src={background} />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectCard;
