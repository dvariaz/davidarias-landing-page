import PropTypes from "prop-types";

import styles from "./Portrait.module.scss";

const Portrait = () => {
    return (
        <div className={styles.body}>
            <svg viewBox="0 0 100 100" className={styles.square}>
                <rect width="100" height="100" strokeWidth="8" stroke="white" fill="none" />
            </svg>
            <picture className={styles.picture}>
                <source
                    media="(min-width: 1024px)"
                    srcSet="/assets/photos/portrait_photo_large.png"
                />
                <source srcSet="/assets/photos/portrait_photo_medium.png" />
                <img src="/assets/photos/portrait_photo_medium.png" alt="David Arias" />
            </picture>
        </div>
    );
};

Portrait.propTypes = {};

export default Portrait;
