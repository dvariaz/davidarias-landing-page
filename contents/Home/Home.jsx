import { useState, useEffect } from "react";
import styles from "./Home.module.scss";

import Navbar from "../../components/Navbar";
import Portrait from "./components/Portrait";
import Shape from "./components/Shape";

const Home = ({ id }) => {
    const [indexTitle, setIndexTitle] = useState(0);
    const titles = [
        ["Creative", "Coder"],
        ["Front-end", "Developer"],
        ["UI", "Designer"],
        ["Motion", "Artist"],
    ];

    return (
        <section id={id} className={styles.body}>
            <Navbar
                sections={[
                    { id: "index", name: "Inicio" },
                    { id: "about-me", name: "Quien soy" },
                    { id: "projects", name: "Mis proyectos" },
                    { id: "education", name: "Educación" },
                    { id: "contact", name: "Contacto" },
                ]}
            />
            <h1
                onAnimationIteration={() =>
                    setIndexTitle((indexTitle) => (indexTitle + 1) % titles.length)
                }
                className={styles.titleUp}
            >
                {titles[indexTitle][0]}
            </h1>
            <Portrait />
            <h1 className={styles.titleDown}>{titles[indexTitle][1]}</h1>
            <Shape color="#b70128" />
        </section>
    );
};

export default Home;
