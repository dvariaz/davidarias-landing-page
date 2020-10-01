import { useState, useEffect } from "react";

const useOnScreen = (ref, rootMargin = "0px", threshold = 1.0) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
                threshold,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return isIntersecting;
};

export default useOnScreen;
