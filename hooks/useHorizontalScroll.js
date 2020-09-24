import { useRef, useEffect } from "react";

const stepPercent = 0.01;

export default function useHorizontalScroll(condition) {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e) => {
                if (condition) {
                    e.preventDefault();
                    console.log(`Vamos a movernos ${el.scrollWidth * stepPercent}`);
                    if (e.deltaY > 0) {
                        if (el.scrollLeft + el.offsetWidth < el.scrollWidth) {
                            el.scrollTo({
                                left: el.scrollLeft + e.deltaY * el.scrollWidth * stepPercent,
                                behavior: "smooth",
                            });
                        }
                    } else {
                        if (el.scrollLeft > 0) {
                            el.scrollTo({
                                left: el.scrollLeft + e.deltaY * el.scrollWidth * stepPercent,
                                behavior: "smooth",
                            });
                        }
                    }
                }
            };

            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, [condition]);
    return elRef;
}