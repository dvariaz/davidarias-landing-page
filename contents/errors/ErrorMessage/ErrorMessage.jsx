import Link from "next/link";
import styles from "./ErrorMessage.module.scss";

import Button from "../../../components/Button";

const Error404 = ({ statusCode, t }) => {
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
