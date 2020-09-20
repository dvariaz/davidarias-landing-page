import styles from "./Home.module.scss";

import Navbar from "~@components/Navbar";
import Portrait from "~@contents/home/components/Portrait";
import Shape from "~@contents/home/components/Shape";

const Home = () => {
    return (
        <section className={styles.body}>
            <Navbar
                sections={[
                    { id: "index", name: "Inicio" },
                    { id: "about-me", name: "Quien soy" },
                    { id: "projects", name: "Mis proyectos" },
                    { id: "education", name: "Educación" },
                ]}
            />
            <h1 className={styles.titleUp}>Motion</h1>
            <Portrait />
            <h1 className={styles.titleDown}>Artist</h1>
            <Shape color="#b70128" />
        </section>
    );
};

export default Home;
