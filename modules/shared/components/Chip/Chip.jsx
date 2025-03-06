import clsx from "clsx";

import "./Chip.scss";

const Chip = ({ children, className }) => {
    return (
        <div className={clsx("chip__body flex items-center light-text text-white py-2 px-3 rounded-full", className)}>
            {children}
        </div>
    );
};

export default Chip;
