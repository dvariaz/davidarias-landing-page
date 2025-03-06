'use client';
import React, { useState } from "react";
import { motion } from "motion/react";

import "./Portrait.scss";
import Particles from "../Particles";
import clsx from "clsx";

const pictureTransition = { type: "spring", duration: 0.8 };

const titles = [
    ["Creative", "Coder"],
    ["Front-end", "Developer"],
    ["UI", "Designer"],
    ["Motion", "Artist"],
];

const Portrait = ({ className }) => {
    const [indexTitle, setIndexTitle] = useState(0);

    return (
        <div className={clsx(className)}>
            <h3
                onAnimationIteration={() =>
                    setIndexTitle(
                        (indexTitle) => (indexTitle + 1) % titles.length
                    )
                }
                className="relative m-0 z-10 portrait__title--up main-text text-2xl"
            >
                {titles[indexTitle][0]}
            </h3>

            <div className="flex justify-center relative z-10 w-full my-4 mx-auto">
                <svg viewBox="0 0 100 100" className="w-2xs">
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8 }}
                        d="M0 0 L100 0 L100 100 L0 100 L0 0"
                        strokeWidth="8"
                        stroke="white"
                        fill="none"
                    />
                </svg>

                <Particles className="w-full overflow-hidden"/>

                <div className="absolute text-center z-20 bottom-3">
                    <motion.picture
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={pictureTransition}
                    >
                        <source
                            media="(min-width: 1024px)"
                            srcSet="/assets/photos/portrait_photo_large.png"
                        />
                        <source srcSet="/assets/photos/portrait_photo_medium.png" />
                        <motion.img
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={pictureTransition}
                            src="/assets/photos/portrait_photo_medium.png"
                            alt="David Arias"
                            className="w-2xs"
                        />
                    </motion.picture>
                </div>
            </div>

            <h3 className="relative m-0 z-10 portrait__title--down main-text text-2xl">
                {titles[indexTitle][1]}
            </h3>
        </div>
    );
};

export default React.memo(Portrait);
