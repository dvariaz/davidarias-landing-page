/** Custom Hook to prevent the offset of mobile browser bar */

import { useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

const useRealViewportSize = () => {
    const size = useWindowSize();

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, [size]);
};

export default useRealViewportSize;
