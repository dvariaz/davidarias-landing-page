import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({ value }) => {
    if (!value.includes("%")) {
        throw Error("Progressbar must include % in its value");
    }

    return (
        <div className="w-1/3 h-1 bg-gray-700">
            <div className="h-full bg-blue-400" style={{ width: value }}></div>
        </div>
    );
};

ProgressBar.propTypes = {
    value: PropTypes.string,
};

export default ProgressBar;
