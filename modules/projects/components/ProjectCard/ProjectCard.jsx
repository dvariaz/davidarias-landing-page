'use client';
import clsx from "clsx";
import { motion } from "motion/react";

import "./ProjectCard.scss";

const ProjectCard = ({ id, thumbnail, background, onClick, disabled, className }) => {
    return (
        <div className={clsx("relative md:p-4", className)}>
            <motion.div
                className="w-full h-full overflow-hidden rounded-xl"
                onClick={onClick}
                layoutId={`project-card-${id}-body`}
                style={disabled ? { pointerEvents: "none" } : { pointerEvents: "all" }}
                layout
            >
                <motion.img
                    layoutId={`project-card-${id}-thumbnail`}
                    src={thumbnail.src_2x}
                    draggable="false"
                    className="w-full h-full object-cover" />
            </motion.div>
        </div>
    );
};

export default ProjectCard;
