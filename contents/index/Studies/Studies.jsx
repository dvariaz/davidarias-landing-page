import { useState, useRef, useContext } from "react";
import { useQuery } from "react-query";
import { AnimatePresence, motion } from "framer-motion";
import ScrollContainer from "react-indiana-drag-scroll";

//Styles
import styles from "./studies.module.scss";

//Components
import Card from "../../../components/Card";

//Context
import { ViewportContext } from "../../../context/ViewportContext";

const Studies = ({ id }) => {
    const ref = useRef();

    const [selectedInstitute, setSelectedInstitute] = useState(null);
    const { centerViewport } = useContext(ViewportContext);
    const listRef = useRef();

    const { isLoading, error, data } = useQuery("studiesData", () =>
        fetch("/api/studies").then((res) => res.json())
    );

    const renderCourses = () => {
        let courses = [];

        if (!selectedInstitute) {
            data.studies.forEach((study) => {
                study.courses.forEach((course) => courses.push({ ...course, icon: study.logo }));
            });
        } else {
            let [study] = data.studies.filter((study) => {
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

        listRef.current.getElement().scrollTop = 0;
    };

    if (isLoading) return "Cargando..";

    if (error) return "Ha ocurrido un error" + error.message;

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
                            {data.studies.map((study, index) => (
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
                <ScrollContainer
                    onStartScroll={() => centerViewport(ref.current.offsetTop)}
                    className={styles.courses}
                    ref={listRef}
                >
                    <motion.div key={selectedInstitute}>{renderCourses()}</motion.div>
                </ScrollContainer>
            </div>
        </section>
    );
};

export default Studies;
