import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <section className={styles.body}>
            <div className={styles.form}>
                <h1 className={styles.title}>
                    ¿Qué esperas para darle un look fantástico a tus ideas?
                </h1>
                <a href="https://wa.me/573164463763" target="_blank" className={styles.button}>
                    Contáctame
                </a>
            </div>
            <div className={styles.background}>
                <h1 className={styles.backgroundText}>Contact</h1>
                <h1 className={styles.backgroundText}>Me</h1>
            </div>
        </section>
    );
};

export default Contact;
