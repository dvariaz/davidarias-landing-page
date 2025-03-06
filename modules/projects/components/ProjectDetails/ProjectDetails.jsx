'use client';
import clsx from "clsx";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

//Components
import Button from "@/modules/shared/components/Button";
import Chip from "@/modules/shared/components/Chip";
import { StatusIndicator } from "@/modules/projects/components/Indicators";

//Utils
import { translateStatus } from "@/modules/projects/utils/enums";

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
    className,
    onClick,
}) => {
    const t = useTranslations("projects");

    return (
        <motion.div
            initial={{ background: "rgba(0,0,0,0)" }}
            animate={{ background: "rgba(3, 5, 12,1)" }}
            exit={{ background: "rgba(0,0,0,0)" }}
            transition={{ duration: 0.2 }}
            className={clsx("flex flex-col-reverse lg:flex-row w-full", className)}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={descriptionVariants}
                transition={{ staggerChildren: 0.05 }}
                className="lg:my-auto text-white flex-1 lg:w-3/6 xl:w-2/6 px-10 overflow-y-scroll lg:overflow-auto scrollbars-hidden max-h-[50vh] lg:max-h-full pb-10"
            >
                <motion.h2
                    variants={textVariants}
                    className="text-xl text-center mt-10 mb-4">
                    {name}
                </motion.h2>

                <div className="description-text flex flex-col max-w-lg mx-auto">
                    <span className="text-center mb-4">{date}</span>

                    {description.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            variants={textVariants}
                            className="mb-4">
                            {paragraph}
                        </motion.p>
                    ))}

                    <div className="flex flex-col mt-4 gap-4 mx-auto max-w-xs">
                        {behance && (
                            <Button
                                type="light"
                                href={behance}
                                target="_blank"
                                prefix="/assets/icons/behance_icon.svg"
                                className="mx-auto py-3 px-8 w-full"
                            >
                                {t("behance-button")}
                            </Button>
                        )}
                        {url && (
                            <Button type="light" href={url} target="_blank" className="mx-auto py-3 px-8 w-full">
                                {t("project-button")}
                            </Button>
                        )}
                    </div>
                </div>
            </motion.div>

            <motion.div
                className="project-card__body lg:w-3/6 xl:w-4/6"
                layoutId={`project-card-${id}-body`}
                onClick={onClick}
                layout
            >
                <motion.div className="project-card__hero relative h-[50vw] lg:h-full">
                    <motion.button
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -150, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute top-4 right-4 w-4 h-4"
                    >
                        <img src="/assets/icons/close_icon.svg" />
                    </motion.button>

                    <div className="absolute top-4 left-4 lg:top-auto lg:bottom-4">
                        <Chip indicatorColor="green">
                            <span className="mr-2 text-sm">{t(translateStatus(status))}</span>
                            <StatusIndicator status={status} />
                        </Chip>
                    </div>

                    <motion.picture
                        layoutId={`project-card-${id}-thumbnail`}
                        className="inline-block w-full h-full object-cover"
                    >
                        <source
                            srcSet={background}
                            media="(min-width: 800px)"
                        />
                        <img
                            src={thumbnail.src_2x}
                            draggable="false"
                            className="w-full h-full object-cover" />
                    </motion.picture>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectDetails;
