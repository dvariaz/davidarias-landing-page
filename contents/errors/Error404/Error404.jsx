import Link from "next/link";
import styles from "./Error404.module.scss";

import Button from "../../../components/Button";

const Error404 = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div>
                    <h1>404</h1>
                    <p>Esta página no existe</p>
                </div>
                <div>
                    <Link href="/" passHref>
                        <Button type="solid">Vuelve al inicio</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error404;
