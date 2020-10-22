import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";

//Components
import Divider from "../../../components/Divider";
import Button from "../../../components/Button";

const AboutMe = () => {
    return (
        <section className={styles.body}>
            <Divider top />
            <div className={styles.content}>
                <h3>Hola! Soy David Arias</h3>
                <img src="/assets/logos/davidarias_logo.svg" className={styles.logo} />
                <div className={styles.description}>
                    <p>
                        Front-end Developer y UI Designer, apasionado por el arte, el diseño y la
                        forma en que se complementa con el fascinante mundo la tecnología.{" "}
                    </p>
                    <p>
                        Actualmente Fullstack Designer en{" "}
                        <a href="https://www.woldev.co" target="_blank">
                            Woldev.co
                        </a>
                    </p>
                    <p>React Lover ⚛️</p>
                </div>
                <Button type="solid" href="/docs/cv-davidarias-es.pdf" target="_blank">
                    Mira mi CV
                </Button>
            </div>
            <div className={styles.background}>
                <motion.h1
                    animate={{ opacity: [0, 1, 0], x: "-30%" }}
                    transition={{ type: "tween", loop: Infinity, duration: 10 }}
                    className={styles.backgroundText}
                >
                    David
                </motion.h1>
                <motion.h1
                    animate={{ opacity: [0, 1, 0], x: "30%" }}
                    transition={{ type: "tween", loop: Infinity, duration: 10 }}
                    className={styles.backgroundText}
                >
                    Arias
                </motion.h1>
            </div>
            <Divider />
        </section>
    );
};

export default AboutMe;
