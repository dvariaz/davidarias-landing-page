import React, { useRef } from "react";

import clsx from "clsx";
import Particle from "./Particle";

const Particles = ({ className }) => {
    const ref = useRef();

    const [translateX, setTranslateX] = React.useState(0);
    const [translateY, setTranslateY] = React.useState(0);

    return (
        <div className={clsx("absolute bottom-1/2 perspective-near", className)} ref={ref}>
            <Particle x={80 + translateX} y={-390 + translateY} z={-100} className="absolute left-1/2 top-1/2 z-20" />
            <Particle x={-280 + translateX} y={-180 + translateY} z={-30} className="absolute left-1/2 top-1/2 z-20" />
            <Particle x={450 + translateX} y={100 + translateY} z={-125} className="absolute left-1/2 top-1/2 z-20" />
            <Particle x={-180 + translateX} y={150 + translateY} z={15} className="absolute left-1/2 top-1/2 z-20" />
            <Particle x={-150 + translateX} y={0 + translateY} z={-30} className="absolute left-1/2 top-1/2 z-20" />
            <Particle x={95 + translateX} y={-90 + translateY} z={15} className="absolute left-1/2 top-1/2 z-20" />
        </div>
    );
};

export default Particles;
