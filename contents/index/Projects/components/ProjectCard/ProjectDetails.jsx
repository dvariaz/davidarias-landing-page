import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

import styles from "./ProjectCard.module.scss";

//Components
import Button from "../../../../../components/Button";
import Chip from "../../../../../components/Chip";
import { StatusIndicator } from "../../../../../components/Indicators";

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
    const { t } = useTranslation("projects");

    const descriptionVariants = {
        visible: {
            opacity: 1,
            transition: {
                delay: 0.25,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                delay: 0,
            },
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
            <motion.div
                initial={{ background: "rgba(0,0,0,0)" }}
                animate={{ background: "rgba(3, 5, 12,1)" }}
                exit={{ background: "rgba(0,0,0,0)" }}
                transition={{ duration: 0.2 }}
                className={styles.headerContainer}
            >
                <motion.div
                    className={styles.body}
                    layoutId={`project-card-${id}-body`}
                    onClick={onClick}
                    layout
                >
                    <motion.div className={styles.hero}>
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
                                    <span>{t(translateStatus(status))}</span>
                                    <StatusIndicator status={status} />
                                </div>
                            </Chip>
                        </div>
                        <motion.picture
                            layoutId={`project-card-${id}-thumbnail`}
                        >
                            <source
                                srcSet={background}
                                media="(min-width: 1600px)"
                            />
                            <img src={thumbnail.src_2x} draggable="false" />
                        </motion.picture>
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
                                    {t("behance-button")}
                                </Button>
                            )}
                            {url && (
                                <Button type="light" href={url} target="_blank">
                                    {t("project-button")}
                                </Button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
