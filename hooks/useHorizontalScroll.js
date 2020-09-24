import { useRef, useEffect } from "react";

const stepPercent = 0.01;

export default function useHorizontalScroll(visible, available) {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el && available) {
            const onWheel = (e) => {
                if (visible) {
                    e.preventDefault();
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
    }, [visible, available]);
    return elRef;
}
