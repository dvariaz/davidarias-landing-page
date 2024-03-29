import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import styles from "./Contact.module.scss";

import Button from "../../../components/Button";

const Contact = ({ id }) => {
    const { t } = useTranslation("contact");

    return (
        <section id={id} className={styles.body}>
            <div className={styles.form}>
                <h1 className={styles.title}>{t("title")}</h1>
                <Button type="solid" href="mailto:davidarias.contact@gmail.com">
                    {t("contact-button")}
                </Button>
            </div>
            <div className={styles.social}>
                {t("social")}
                <div className={styles.socialNetworks}>
                    <a
                        href="https://www.linkedin.com/in/dvariaz/"
                        target="_blank"
                    >
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
            <footer className={styles.footer}>{t("made-in")} - 2020</footer>
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
        </section>
    );
};

export default Contact;
