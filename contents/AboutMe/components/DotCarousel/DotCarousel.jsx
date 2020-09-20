import { useState, useEffect, useRef } from "react";
import styles from "./DotCarousel.module.scss";

import Page from "./Page";

const DotCarousel = ({ items, onPageChange }) => {
    const carouselRef = useRef();
    const [activePage, setActivePage] = useState(0);
    const [isSkipping, setIsSkipping] = useState(false);

    const isCurrent = (id) => {
        return activePage === id;
    };

    const handleCheck = (e) => {
        let page = parseInt(e.target.value);

        if (activePage != page) {
            if (page === activePage + 1 || page === activePage - 1) {
                //Si está incrementando/decrementando en 1
                setActivePage(page);
                carouselRef.current.scrollLeft = page * window.innerWidth;
            } else {
                //Si está haciendo un salto
                setIsSkipping(true);
                carouselRef.current.scrollLeft = page * window.innerWidth;
                //TODO: Convertirlo en una promesa que verifique cuando se llegó al destino
                setTimeout(() => {
                    setIsSkipping(false);
                    setActivePage(page);
                }, 500);
            }
        }
    };

    const handlePageVisibility = (id) => {
        setActivePage(id);
    };

    useEffect(() => {
        onPageChange(activePage);
    }, [activePage]);

    return (
        <>
            <div className={styles.track} ref={carouselRef}>
                {items?.map((item) => (
                    <Page
                        key={item.id}
                        isSkipping={isSkipping}
                        onVisible={() => handlePageVisibility(item.id)}
                    >
                        {item.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </Page>
                ))}
            </div>
            <form className={styles.navigationDots}>
                {items?.map((item) => (
                    <label key={item.id}>
                        <input
                            type="radio"
                            name="pageSelected"
                            value={item.id}
                            onChange={handleCheck}
                            checked={isCurrent(item.id)}
                        />
                    </label>
                ))}
            </form>
        </>
    );
};

DotCarousel.propTypes = {};

export default DotCarousel;
