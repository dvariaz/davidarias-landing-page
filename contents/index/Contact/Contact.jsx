import { motion } from "framer-motion";
import styles from "./Contact.module.scss";

import Button from "../../../components/Button";
import Divider from "../../../components/Divider";

const Contact = ({ id }) => {
    return (
        <section id={id} className={styles.body}>
            <Divider top />
            <div className={styles.form}>
                <h1 className={styles.title}>
                    ¿Qué esperas para darle un look fantástico a tus ideas?
                </h1>
                <Button type="solid" href="mailto:davidarias.contact@gmail.com">
                    Contáctame
                </Button>
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
                <motion.h1
                    animate={{ opacity: [0, 1, 0], x: "-30%" }}
                    transition={{ type: "tween", loop: Infinity, duration: 10 }}
                    className={styles.backgroundText}
                >
                    Contact
                </motion.h1>
                <motion.h1
                    animate={{ opacity: [0, 1, 0], x: "30%" }}
                    transition={{ type: "tween", loop: Infinity, duration: 10 }}
                    className={styles.backgroundText}
                >
                    Me
                </motion.h1>
            </div>
            <Divider />
        </section>
    );
};

export default Contact;
