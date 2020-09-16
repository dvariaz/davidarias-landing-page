import styles from "./Studies.module.scss";

import Card from "@components/Card";

//TODO: Hacer que se muestren los cursos de la plataforma activa

const Studies = ({ studies }) => {
    return (
        <section className={styles.body}>
            <h1 className={styles.title}>Estudios</h1>
            <p className={styles.description}>
                Estoy constantemente aprendiendo cosas nuevas por medio de libros y plataformas de
                aprendizaje online, creo que es una forma muy flexible de complementar las bases que
                adquirí en mi vida universitaria.
            </p>
            <div className={styles.platformSelector}>
                <form>
                    {studies.map((study, index) => (
                        <label key={index}>
                            <input
                                type="radio"
                                name="platformSelected"
                                className={styles.platform}
                                style={{ backgroundImage: `url('${study.logo}')` }}
                            />
                        </label>
                    ))}
                </form>
            </div>
            <ul className={styles.courses}>
                {studies.map((study) =>
                    study.courses.map((course) => (
                        <li index={course.id}>
                            <Card
                                type="course"
                                subtitle={course.name}
                                icon={study.logo}
                                date={course.date}
                                duration={course.duration}
                            />
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
};

export default Studies;
