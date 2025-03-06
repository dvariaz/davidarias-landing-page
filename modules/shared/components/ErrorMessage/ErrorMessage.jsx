import Link from "next/link";
import { useTranslations } from "next-intl";
import "./ErrorMessage.scss";

import Button from "@/modules/shared/components/Button";

const Error404 = ({ statusCode }) => {
    const t = useTranslations("404");

    return (
        <div className="error-message__body section">
            <div className="error-message__container section">
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
