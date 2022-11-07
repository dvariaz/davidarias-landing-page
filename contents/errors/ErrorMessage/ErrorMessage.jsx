import Link from "next/link";
import { useTranslation } from "next-i18next";
import styles from "./ErrorMessage.module.scss";

import Button from "../../../components/Button";

const Error404 = ({ statusCode }) => {
    const { t } = useTranslation("404");

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div>
                    <h1>{statusCode}</h1>
                    <p>{t("message")}</p>
                </div>
                <div>
                    <Link href="/" passHref>
                        <Button type="solid">{t("back-button")}</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;
