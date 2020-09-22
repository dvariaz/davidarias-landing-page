import { useRef, useEffect } from "react";

import styles from "./DotCarousel.module.scss";

import useOnScreen from "../../../../hooks/useOnScreen.js";

const Page = ({ onVisible, children }) => {
    const ref = useRef();
    const isVisible = useOnScreen(ref, "10px", 0.9);

    useEffect(() => {
        //Si la página pasó a ser visible, y no es por un salto de página...
        if (isVisible) {
            onVisible();
        }
    }, [isVisible]);

    return (
        <div className={styles.page} ref={ref}>
            {children}
        </div>
    );
};

export default Page;
