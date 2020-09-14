import styles from "./Skills.module.scss";

const Skills = () => {
    return (
        <section className={styles.body}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h1>Luis David Arias Manjarrez</h1>
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet="/assets/photos/square_photo_large.jpg"
                        />
                        <source srcSet="/assets/photos/square_photo_medium.jpg" />
                        <img src="/assets/photos/square_photo_medium.jpg" alt="David Arias" />
                    </picture>
                    <ul className={styles.items}>
                        <li>
                            <div>Inglés</div>
                            <div>B1</div>
                        </li>
                        <li>
                            <div>Observación</div>
                            <div>---</div>
                        </li>
                        <li>
                            <div>Comunicación</div>
                            <div>---</div>
                        </li>
                        <li>
                            <div>Creatividad</div>
                            <div>---</div>
                        </li>
                        <li>
                            <div>Liderazgo</div>
                            <div>---</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
