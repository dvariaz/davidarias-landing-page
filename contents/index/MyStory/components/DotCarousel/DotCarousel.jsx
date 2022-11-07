import { useState, useEffect, useRef } from "react";
import styles from "./DotCarousel.module.scss";

import Page from "./Page";

//TODO: Revisar los handle y utilizar useCallback
const DotCarousel = ({ items, onPageChange }) => {
    const carouselRef = useRef();
    const [activePage, setActivePage] = useState(0);
    const [isSkipping, setIsSkipping] = useState(false);

    const isInitialPage = activePage === 0;
    const isLastPage = activePage === items.length - 1;

    const isCurrent = (id) => {
        return activePage === id;
    };

    const handleCheck = (e) => {
        let page = parseInt(e.target.value);

        if (activePage != page) {
            if (page === activePage + 1 || page === activePage - 1) {
                //Si está incrementando/decrementando en 1
                setActivePage(page);
                carouselRef.current.scrollLeft =
                    page * carouselRef.current.offsetWidth;
                onPageChange(page);
            } else {
                //Si está haciendo un salto
                setIsSkipping(true);
                carouselRef.current.scrollLeft =
                    page * carouselRef.current.offsetWidth;
                onPageChange(page);
                //TODO: Convertirlo en una promesa que verifique cuando se llegó al destino
                setTimeout(() => {
                    setIsSkipping(false);
                    setActivePage(page);
                }, 500);
            }
        }
    };

    const handleSwipe = (direction) => {
        if (direction === "NO_SWIPE" || isSkipping) return;
        if (
            (direction === "LEFT_SWIPE" && isLastPage) ||
            (direction === "RIGHT_SWIPE" && isInitialPage)
        )
            return;

        const nextPage =
            direction === "LEFT_SWIPE" ? activePage + 1 : activePage - 1;
        setActivePage(nextPage);
        onPageChange(nextPage);
    };

    return (
        <>
            <div className={styles.track} ref={carouselRef}>
                {items?.map((item, index) => (
                    <Page key={item.id} onSwipe={handleSwipe}>
                        {item.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </Page>
                ))}
            </div>
            <form className={styles.navigationDots}>
                {items?.map((item, index) => (
                    <label key={item.id}>
                        <input
                            type="radio"
                            name="pageSelected"
                            value={index}
                            onChange={handleCheck}
                            checked={isCurrent(index)}
                        />
                    </label>
                ))}
            </form>
        </>
    );
};

export default DotCarousel;
