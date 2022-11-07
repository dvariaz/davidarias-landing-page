import { useRouter } from "next/router";

import styles from "./LanguageToggler.module.css";

const LanguageToggler = () => {
    const router = useRouter();

    const [nextLocale] = router.locales.filter(
        (locale) => locale !== router.locale
    );

    const handleClick = () => {
        router.push(router.route, router.asPath, {
            locale: nextLocale,
        });
    };

    return (
        <>
            <button onClick={handleClick} className={styles.body}>
                {router.locale}
            </button>
        </>
    );
};

export default LanguageToggler;
