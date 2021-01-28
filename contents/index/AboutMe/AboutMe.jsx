import { motion } from "framer-motion";
import styles from "./AboutMe.module.scss";

//Components
import Divider from "../../../components/Divider";
import Button from "../../../components/Button";

const AboutMe = ({ t }) => {
  return (
    <section className={styles.body}>
      <Divider top />
      <div className={styles.content}>
        <h3>{t("greeting")}</h3>
        <img src="/assets/logos/davidarias_logo.svg" className={styles.logo} />
        <div className={styles.description}>
          <p>{t("description")}</p>
          <p>
            {t("current-job")}
            <a href="https://www.nuvu.cc" target="_blank">
              Nuvu
            </a>
          </p>
          <p>React Lover ⚛️</p>
        </div>
        <Button type="solid" href={t("cv-link")} target="_blank">
          {t("cv-link-button")}
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
