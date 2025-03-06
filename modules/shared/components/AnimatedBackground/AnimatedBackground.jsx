'use client';

import clsx from "clsx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const backgroundVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const backgroundTransition = {
    type: "tween",
    duration: 0.5,
};

const AnimatedBackground = ({ src, className }) => {
    const [currentSrcs, setCurrentSrc] = useState([src]);
    
    const enqueueNextImage = (nextImage) => {
        setCurrentSrc([...currentSrcs, nextImage]);
    }

    const handleQueuingFinish = (src) => {
        if (currentSrcs.length === 1) return;

        setCurrentSrc([src]);
    }

    useEffect(() => {
        if (!currentSrcs.includes(src)) {
            enqueueNextImage(src);
        }
    }, [src])

    return (
        <div className={clsx(className)}>
            {
                currentSrcs.map((src, index) => (
                    <AnimatePresence key={src}>
                        <motion.img
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={backgroundVariants}
                            transition={backgroundTransition}
                            src={src}
                            onAnimationComplete={() => handleQueuingFinish(src)}
                            className="w-full h-full object-cover absolute"
                            style={{ zIndex: index + 10 }}
                        />
                    </AnimatePresence>
                ))
            }
        </div>
    );
};

export default AnimatedBackground;
