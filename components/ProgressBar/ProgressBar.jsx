import React from "react";
import PropTypes from "prop-types";

import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ value }) => {
    if (!value.includes("%")) {
        throw Error("Progressbar must include % in its value");
    }

    return (
        <div className={styles.body}>
            <div className={styles.filled} style={{ width: value }}></div>
        </div>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.string,
};

export default ProgressBar;
