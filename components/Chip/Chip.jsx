import styles from "./Chip.module.scss";

const Chip = ({ children }) => {
    return (
        <div className={styles.body}>
            {children}
            <span className={styles.indicator}></span>
        </div>
    );
};

export default Chip;
