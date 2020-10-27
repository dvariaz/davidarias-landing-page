import { useContext, useCallback } from "react";
import { useRouter } from "next/router";
import { I18nContext } from "next-i18next";
import { i18n } from "../../i18n";

import styles from "./LanguageToggler.module.css";

const LanguageToggler = () => {
    const router = useRouter();

    const {
        i18n: { language },
    } = useContext(I18nContext);

    const handleClick = () => {
        i18n.changeLanguage(i18n.language === "en" ? "es" : "en", () => router.push("/"));
    };

    return (
        <>
            <button onClick={handleClick} className={styles.body}>
                {language}
            </button>
        </>
    );
};

export default LanguageToggler;
