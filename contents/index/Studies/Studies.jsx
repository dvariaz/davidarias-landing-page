import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Studies.module.scss";

import Card from "../../../components/Card";

import useOnScreen from "../../../hooks/useOnScreen";

const Studies = ({ id, studies }) => {
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

        return courses.map((course, index) => (
            <motion.div
                key={course.id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                    initial: {
                        y: 100,
                        opacity: 0,
                    },
                    animate: {
                        y: 0,
                        opacity: 1,
                    },
                    exit: {
                        y: -100,
                        opacity: 0,
                    },
                }}
                transition={{ delay: index / 10 }}
                style={{ margin: "1em 0" }}
            >
                <Card
                    type="course"
                    subtitle={course.name}
                    icon={course.icon}
                    date={course.date}
                    duration={course.duration}
                />
            </motion.div>
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
        <section id={id} className={styles.body} ref={ref}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Estudios</h1>
                    <p className={styles.description}>
                        Estoy constantemente aprendiendo cosas nuevas por medio de libros y
                        plataformas de aprendizaje online, creo que es una forma muy flexible de
                        complementar las bases que adquirí en mi vida universitaria.
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
                <div
                    className={styles.courses}
                    style={
                        isVisible
                            ? { opacity: 1, overflow: "scroll" }
                            : { opacity: 0.4, overflow: "hidden" }
                    }
                    ref={listRef}
                >
                    <motion.div key={selectedInstitute}>{renderCourses()}</motion.div>
                </div>
            </div>
        </section>
    );
};

export default Studies;
