import { useState, useRef } from "react";
import { motion } from "framer-motion";

import styles from "./Studies.module.scss";

import Card from "../../components/Card";

import useOnScreen from "../../hooks/useOnScreen";

const Studies = ({ studies }) => {
    const ref = useRef();
    const listRef = useRef();
    const [selectedInstitute, setSelectedInstitute] = useState(null);
    const isVisible = useOnScreen(ref, "0px", 0.95);

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
        <section className={styles.body} ref={ref}>
            <div className={styles.header}>
                <h1 className={styles.title}>Estudios</h1>
                <p className={styles.description}>
                    Estoy constantemente aprendiendo cosas nuevas por medio de libros y plataformas
                    de aprendizaje online, creo que es una forma muy flexible de complementar las
                    bases que adquirí en mi vida universitaria.
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
            </div>
            <motion.div
                animate={
                    isVisible
                        ? { opacity: 1, overflow: "scroll" }
                        : { opacity: 0.4, overflow: "hidden" }
                }
                className={styles.courses}
                ref={listRef}
            >
                {renderCourses()}
            </motion.div>
        </section>
    );
};

export default Studies;
