import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./DotCarousel.module.scss";

const DotCarousel = ({ items, onPageChange }) => {
    const carouselRef = useRef();

    const [activePage, setActivePage] = useState(0);

    const isCurrent = (id) => {
        return activePage === id;
    };

    const handleCheck = (e) => {
        let page = parseInt(e.target.value);
        // console.log(page);
        if (activePage != page) {
            setActivePage(page);
        }
    };

    useEffect(() => {
        carouselRef.current.scrollLeft = activePage * window.innerWidth;
        onPageChange(activePage);
    }, [activePage]);

    return (
        <>
            <div className={styles.track} ref={carouselRef}>
                {items?.map((item) => (
                    <div key={item.id} className={styles.page}>
                        {item.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
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
