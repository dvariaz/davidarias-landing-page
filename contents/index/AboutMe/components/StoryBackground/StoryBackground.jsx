import { motion, AnimatePresence } from "framer-motion";

const StoryBackground = ({ name, urls }) => {
    const backgroundVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const backgroundTransition = {
        type: "tween",
        duration: 0.5,
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.picture
                key={name}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={backgroundVariants}
                transition={backgroundTransition}
            >
                <source media="(min-width: 1921px)" srcSet={urls.large} />
                <source media="(min-width: 1024px)" srcSet={urls.medium} />
                <source srcSet={urls.small} />
                <motion.img
                    key={name}
                    initial="hidden"
                    exit="hidden"
                    variants={backgroundVariants}
                    transition={backgroundTransition}
                    src={urls.medium}
                    alt={name}
                />
            </motion.picture>
        </AnimatePresence>
    );
};

export default StoryBackground;
