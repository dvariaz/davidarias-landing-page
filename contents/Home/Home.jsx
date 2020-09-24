import styles from "./Home.module.scss";

import Navbar from "../../components/Navbar";
import Portrait from "./components/Portrait";
import Shape from "./components/Shape";

const Home = ({ id }) => {
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
            <h1 className={styles.titleUp}>Creative</h1>
            <Portrait />
            <h1 className={styles.titleDown}>Coder</h1>
            <Shape color="#b70128" />
        </section>
    );
};

export default Home;
