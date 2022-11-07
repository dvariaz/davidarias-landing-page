import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./Portrait.module.scss";
import Particles from "../Particles";

const Portrait = ({ sectionRef }) => {
    const [indexTitle, setIndexTitle] = useState(0);
    const titles = [
        ["Creative", "Coder"],
        ["Front-end", "Developer"],
        ["UI", "Designer"],
        ["Motion", "Artist"],
    ];

    return (
        <div>
            <h1
                onAnimationIteration={() =>
                    setIndexTitle(
                        (indexTitle) => (indexTitle + 1) % titles.length
                    )
                }
                className={styles.titleUp}
            >
                {titles[indexTitle][0]}
            </h1>
            <div className={styles.body}>
                <svg viewBox="0 0 100 100" className={styles.square}>
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
                <Particles sectionRef={sectionRef} />
                <div className={styles.picture}>
                    <motion.picture
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween", duration: 0.8 }}
                    >
                        <source
                            media="(min-width: 1024px)"
                            srcSet="/assets/photos/portrait_photo_large.png"
                        />
                        <source srcSet="/assets/photos/portrait_photo_medium.png" />
                        <motion.img
                            initial={{ opacity: 0, y: 150 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 0.8 }}
                            src="/assets/photos/portrait_photo_medium.png"
                            alt="David Arias"
                        />
                    </motion.picture>
                </div>
            </div>
            <h1 className={styles.titleDown}>{titles[indexTitle][1]}</h1>
        </div>
    );
};

export default React.memo(Portrait);
