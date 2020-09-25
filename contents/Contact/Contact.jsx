import styles from "./Contact.module.scss";

const Contact = ({ id }) => {
    return (
        <section id={id} className={styles.body}>
            <div className={styles.form}>
                <h1 className={styles.title}>
                    ¿Qué esperas para darle un look fantástico a tus ideas?
                </h1>
                <a href="https://wa.me/573164463763" target="_blank" className={styles.button}>
                    Contáctame
                </a>
            </div>
            <div className={styles.social}>
                Sígueme en redes sociales
                <div className={styles.socialNetworks}>
                    <a href="https://www.linkedin.com/in/dvariaz/" target="_blank">
                        <img
                            src={"/assets/icons/linkedin_icon.svg"}
                            className={styles.icon}
                            alt="Github"
                        />
                    </a>
                    <a href="https://www.behance.net/dvariaz" target="_blank">
                        <img
                            src={"/assets/icons/behance_icon.svg"}
                            className={styles.icon}
                            alt="Behance"
                        />
                    </a>
                    <a href="https://github.com/dvariaz" target="_blank">
                        <img
                            src={"/assets/icons/github_icon.svg"}
                            className={styles.icon}
                            alt="Github"
                        />
                    </a>
                </div>
            </div>
            <footer className={styles.footer}>2020</footer>
            <div className={styles.background}>
                <h1 className={styles.backgroundText}>Contact</h1>
                <h1 className={styles.backgroundText}>Me</h1>
            </div>
        </section>
    );
};

export default Contact;
