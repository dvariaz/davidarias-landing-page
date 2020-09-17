import { useState, useRef } from "react";

import styles from "./AboutMe.module.scss";
import DotCarousel from "./components/DotCarousel";

const AboutMe = ({ stories }) => {
    const [background, setBackground] = useState(0);

    const handlePageChange = (value) => {
        setBackground(value);
    };

    const renderBackground = (index) => (
        <>
            <picture>
                <source media="(min-width: 1921px)" srcSet={stories[index].background.urls.large} />
                <source
                    media="(min-width: 1024px)"
                    srcSet={stories[index].background.urls.medium}
                />
                <source srcSet={stories[index].background.urls.small} />
                <img
                    src={stories[index].background.urls.medium}
                    alt={stories[index].background.name}
                />
            </picture>
        </>
    );

    return (
        <section className={styles.body}>
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre mi</h1>
                <div className={styles.description}>
                    <DotCarousel items={stories} onPageChange={handlePageChange} />
                </div>
            </div>
            <div className={styles.background}>{renderBackground(background)}</div>
        </section>
    );
};

export default AboutMe;
