import React from "react";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
    return (
        <section className={styles.body}>
            <div className={styles.content}>
                <h1 className={styles.title}>Sobre mi</h1>
                <div className={styles.description}>
                    <p>
                        Me llamo Luis David Arias Manjarrez, nací en Cartago Valle, el sol más
                        alegre de Colombia... en serio, el más alegre.
                    </p>
                    <p>
                        Desde pequeño, siempre me apasionó crear cosas y hacer que se vieran bien, y
                        desde entonces llevo 11 años estudiando de forma autodidacta todo lo
                        relacionado con el arte digital, encontrando mis más grandes pasiones en la
                        fotografía, la animación 3D, los efectos visuales y las interfaces de
                        usuario.
                    </p>
                </div>
            </div>
            <div className={styles.background}>
                <picture>
                    <source
                        media="(min-width: 1921px)"
                        srcSet="/assets/backgrounds/catedral_background_large.png"
                    />
                    <source
                        media="(min-width: 1024px)"
                        srcSet="/assets/backgrounds/catedral_background_medium.png"
                    />
                    <source srcSet="/assets/backgrounds/catedral_background_small.png" />
                    <img
                        src="/assets/backgrounds/catedral_background_medium.png"
                        alt="Catedral de Cartago"
                    />
                </picture>
            </div>
        </section>
    );
};

export default AboutMe;
