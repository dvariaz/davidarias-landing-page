import styles from "./Home.module.scss";

import Portrait from "@contents/home/components/Portrait";
import Shape from "@contents/home/components/Shape";

const Home = () => {
    return (
        <section className={styles.body}>
            <h1 className={styles.titleUp}>Motion</h1>
            <Portrait />
            <h1 className={styles.titleDown}>Artist</h1>
            <Shape color="#b70128" />
        </section>
    );
};

export default Home;
