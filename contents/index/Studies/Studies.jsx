import { useState, useRef, useContext, useCallback } from "react";
import { useTranslation } from "next-i18next";
import { useQuery } from "react-query";
import { AnimatePresence, motion } from "framer-motion";
import ScrollContainer from "react-indiana-drag-scroll";

//Styles
import styles from "./Studies.module.scss";

//Components
import Divider from "../../../components/Divider";
import Card from "../../../components/Card";
import PulseLoader from "react-spinners/PulseLoader";

//Context
import { ViewportContext } from "../../../context/ViewportContext";

const Studies = ({ id }) => {
    const { t } = useTranslation("studies");
    const ref = useRef();

    const [selectedInstitute, setSelectedInstitute] = useState(null);
    const { centerViewport } = useContext(ViewportContext);
    const listRef = useRef();

    const { isLoading, error, data } = useQuery(
        "studiesData",
        () => fetch("/api/studies").then((res) => res.json()),
        { retry: false, refetchOnWindowFocus: false }
    );

    const formatDuration = (duration) => {
        let durationString = "";

        if (duration.semesters) {
            durationString +=
                t("duration.semester", { count: duration.semesters }) + " ";
        }

        if (duration.hours) {
            durationString +=
                t("duration.hour", { count: duration.hours }) + " ";
        }

        if (duration.minutes) {
            durationString +=
                t("duration.minute", { count: duration.minutes }) + " ";
        }

        return durationString.trim();
    };

    const renderCourses = () => {
        let courses = [];

        if (!selectedInstitute) {
            data?.studies.forEach((study) => {
                study.courses.forEach((course) =>
                    courses.push({ ...course, icon: study.logo })
                );
            });
        } else {
            let [study] = data.studies.filter((study) => {
                return study.id === selectedInstitute;
            });

            courses = study.courses.map((course) => ({
                ...course,
                icon: study.logo,
            }));
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
                    duration={formatDuration(course.duration)}
                />
            </motion.div>
        ));
    };

    const renderSkeleton = useCallback(() => {
        let skeletons = Array.from(Array(8).keys());
        return (
            <div>
                {skeletons.map((skeleton) => (
                    <Card key={skeleton} type="course" loading={isLoading} />
                ))}
            </div>
        );
    }, [error, isLoading]);

    const selectInstitute = (e) => {
        const id = e.target.value;
        if (selectedInstitute == id) {
            setSelectedInstitute(null);
        } else {
            setSelectedInstitute(id);
        }

        listRef.current.getElement().scrollTop = 0;
    };

    return (
        <section id={id} className={styles.body} ref={ref}>
            <Divider top />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t("title")}</h1>
                    <p className={styles.description}>{t("description")}</p>
                    <div className={styles.platformSelector}>
                        {isLoading ? (
                            <div className={styles.platformsLoading}>
                                <PulseLoader
                                    size={20}
                                    color={"rgba(255, 255, 255, 0.25)"}
                                    loading={isLoading}
                                />
                            </div>
                        ) : (
                            !error && (
                                <form>
                                    {data?.studies.map((study, index) => (
                                        <label key={index}>
                                            <input
                                                type="radio"
                                                name="platformSelected"
                                                value={study.id}
                                                checked={
                                                    selectedInstitute ==
                                                    study.id
                                                }
                                                onClick={selectInstitute}
                                                className={styles.platform}
                                                style={{
                                                    backgroundImage: `url('${study.logo}')`,
                                                }}
                                                readOnly
                                            />
                                        </label>
                                    ))}
                                </form>
                            )
                        )}
                    </div>
                </div>
                <ScrollContainer
                    onStartScroll={() => centerViewport(ref.current.offsetTop)}
                    hideScrollbars={false}
                    className={styles.courses}
                    ref={listRef}
                    style={{
                        pointerEvents: data === undefined ? "none" : "all",
                    }}
                >
                    {error && (
                        <div className={styles.error}>
                            <div className={styles.message}>
                                <h2>Oops!</h2>
                                <p>{t("error-message")}</p>
                            </div>
                        </div>
                    )}
                    <motion.div key={selectedInstitute}>
                        {data != undefined ? renderCourses() : renderSkeleton()}
                    </motion.div>
                </ScrollContainer>
            </div>
            <Divider />
        </section>
    );
};

export default Studies;
