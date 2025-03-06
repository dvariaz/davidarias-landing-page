import clsx from "clsx";

const Particle = ({ x, y, z, className }) => {
    return (
        <div
            style={{ transform: `translate3d(${x}px,${y}px,${z}px)` }}
            className={clsx("-m-l-6 -m-t-6 w-10 h-10 bg-white rounded-full will-change-transform", className)}
        ></div>
    );
};

export default Particle;
