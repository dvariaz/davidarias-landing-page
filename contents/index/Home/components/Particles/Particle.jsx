import styles from "./Particles.module.scss";

const Particle = ({ x, y, z }) => {
    return (
        <div
            style={{ transform: `translate3d(${x}px,${y}px,${z}px)` }}
            className={styles.point}
        ></div>
    );
};

export default Particle;
