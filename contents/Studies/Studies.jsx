import { useState, useRef } from "react";

import styles from "./Studies.module.scss";

import Card from "../../components/Card";

const Studies = ({ studies }) => {
    const listRef = useRef();
    const [selectedInstitute, setSelectedInstitute] = useState(null);

    const renderCourses = () => {
        let courses = [];

        if (!selectedInstitute) {
            studies.forEach((study) => {
                study.courses.forEach((course) => courses.push({ ...course, icon: study.logo }));
            });
        } else {
            let [study] = studies.filter((study) => {
                return study.id === selectedInstitute;
            });

            courses = study.courses.map((course) => ({ ...course, icon: study.logo }));
        }

        return courses.map((course) => (
            <Card
                key={course.id}
                type="course"
                subtitle={course.name}
                icon={course.icon}
                date={course.date}
                duration={course.duration}
            />
        ));
    };

    const selectInstitute = (e) => {
        const id = e.target.value;
        if (selectedInstitute == id) {
            setSelectedInstitute(null);
        } else {
            setSelectedInstitute(id);
        }

        listRef.current.scrollTop = 0;
    };

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
                                value={study.id}
                                checked={selectedInstitute == study.id}
                                onClick={selectInstitute}
                                className={styles.platform}
                                style={{ backgroundImage: `url('${study.logo}')` }}
                                readOnly
                            />
                        </label>
                    ))}
                </form>
            </div>
            <div ref={listRef} className={styles.courses}>
                {renderCourses()}
            </div>
        </section>
    );
};

export default Studies;
