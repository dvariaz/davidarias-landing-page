import clsx from "clsx";

const Divider = ({ className, top }) => {
    return (
        <svg
            viewBox="0 0 100 10"
            width="100%"
            className={clsx("h-10", className)}
            style={top ? { top: 0, transform: "scale(-1)" } : { bottom: 0 }}
            preserveAspectRatio="none"
        >
            <polygon points="0,10 100,0 100,10" fill="#b70128" />
        </svg>
    );
};

export default Divider;
