import { useRef, useEffect, useContext } from "react";
import styles from "./Particles.module.scss";

import Particle from "./Particle";

const Particles = ({ sectionRef }) => {
    const ref = useRef();

    const [translateX, setTranslateX] = React.useState(0);
    const [translateY, setTranslateY] = React.useState(0);

    useEffect(() => {
        sectionRef.current.addEventListener("mousemove", (e) => {
            let box = ref.current.getBoundingClientRect();
            let offsetX = (e.clientX - box.x) / 20;
            let offsetY = (e.clientY - box.y) / 20;
            setTranslateX(offsetX);
            setTranslateY(offsetY);
        });
        return () => {
            sectionRef.current.removeEventListener("mousemove", null);
        };
    }, []);

    return (
        <div className={styles.body} ref={ref}>
            <Particle x={80 + translateX} y={-390 + translateY} z={-100} />
            <Particle x={-280 + translateX} y={-180 + translateY} z={-30} />
            <Particle x={450 + translateX} y={100 + translateY} z={-125} />
            <Particle x={-180 + translateX} y={150 + translateY} z={15} />
            <Particle x={-150 + translateX} y={0 + translateY} z={-30} />
            <Particle x={95 + translateX} y={-90 + translateY} z={15} />
        </div>
    );
};

export default Particles;
