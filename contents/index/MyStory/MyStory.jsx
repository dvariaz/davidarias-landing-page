import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useTranslation } from "next-i18next";

import styles from "./MyStory.module.scss";

import DotCarousel from "./components/DotCarousel";
import Divider from "../../../components/Divider";
import PulseLoader from "react-spinners/PulseLoader";
import StoryBackground from "./components/StoryBackground/StoryBackground";

//TODO: Revisar los handle y utilizar useCallback
const MyStory = ({ id }) => {
    const { locale } = useRouter();
    const { t } = useTranslation("my-story");
    const [index, setIndex] = useState(0);

    const { isLoading, error, data, refetch } = useQuery(
        "storiesData",
        () => fetch(`/api/stories?lang=${locale}`).then((res) => res.json()),
        { retry: false, refetchOnWindowFocus: false }
    );

    const handlePageChange = (pageIndex) => {
        setIndex(pageIndex);
    };

    useEffect(() => {
        refetch();
    }, [t]);

    if (error) {
        return (
            <section id={id} className={styles.body}>
                <Divider top />
                <div className={styles.content}>
                    <h1 className={styles.title}>{t("title")}</h1>
                    <div className={styles.description}>
                        <p>{t("error-loading")}</p>
                    </div>
                </div>
                <Divider />
            </section>
        );
    }

    return (
        <section id={id} className={styles.body}>
            <Divider top />
            <div className={styles.content}>
                <h1 className={styles.title}>{t("title")}</h1>
                {isLoading ? (
                    <div className={styles.loadingContent}>
                        <PulseLoader
                            size={15}
                            color={"rgba(255, 255, 255, 0.25)"}
                            loading={isLoading}
                        />
                    </div>
                ) : (
                    <div className={styles.description}>
                        <DotCarousel
                            items={data?.stories}
                            onPageChange={handlePageChange}
                        />
                    </div>
                )}
            </div>
            <div className={styles.background}>
                {!isLoading && (
                    <StoryBackground
                        name={data?.stories[index].background.name}
                        urls={data?.stories[index].background.urls}
                    />
                )}
            </div>
            <Divider />
        </section>
    );
};

export default MyStory;
