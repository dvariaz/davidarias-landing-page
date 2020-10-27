import { v4 as uuidv4 } from "uuid";

const stories = {
    en: [
        {
            id: uuidv4(),
            description: [
                "I was born in Cartago Valle, the happiest sun of Colombia... seriously, the happiest.",
                "Since I was a child, always I liked to make things and make them look great.",
                "With more than 10 years of studies and self-taught preparation, I found my greatest passions in photography, 3D animation, visual effects and user interfaces.",
            ],
            background: {
                name: "Cartago Cathedral",
                urls: {
                    small: "/assets/backgrounds/catedral_background_small.png",
                    medium: "/assets/backgrounds/catedral_background_medium.png",
                    large: "/assets/backgrounds/catedral_background_large.png",
                },
            },
        },
        {
            id: uuidv4(),
            description: [
                "I had a deep desire to study Filmmaking, career that I couldn't start for financial reasons.",
                "Instead, I entered to Systems Engineering, a world that it seemed the opposite and challenged me for many semesters.",
            ],
            background: {
                name: "Universidad Tecnológica de Pereira",
                urls: {
                    small: "/assets/backgrounds/utp_background_small.png",
                    medium: "/assets/backgrounds/utp_background_medium.png",
                    large: "/assets/backgrounds/utp_background_large.png",
                },
            },
        },
        {
            id: uuidv4(),
            description: [
                "Between calculations and lines of code, finally I found that discipline where art and technology complemented themselves, where I discovered I wasn't a student in the wrong career, but an artist that was looking for give color and life to a field of science dominated by numbers.",
            ],
            background: {
                name: "Global Game Jam 2019",
                urls: {
                    small: "/assets/backgrounds/ggj_background_small.png",
                    medium: "/assets/backgrounds/ggj_background_medium.png",
                    large: "/assets/backgrounds/ggj_background_large.png",
                },
            },
        },
        {
            id: uuidv4(),
            description: [
                "Now, I look for new opportunities to continue learning, to enhance my skills and reach my goals. I look for others to see the importance of art and design in the world of software, and I look that my story to be a motivation to turn each obstacle in an impulse for go further and further.",
                "Are you ready to be part of this story?",
            ],
            background: {
                name: "Cartago - Pereira Road",
                urls: {
                    small: "/assets/backgrounds/mountains_background_small.png",
                    medium: "/assets/backgrounds/mountains_background_medium.png",
                    large: "/assets/backgrounds/mountains_background_large.png",
                },
            },
        },
    ],
    es: [
        {
            id: uuidv4(),
            description: [
                "Nací en Cartago Valle, el sol más alegre de Colombia... en serio, el más alegre.",
                "Desde pequeño, siempre me gustaba crear cosas y hacer que se vieran bien.",
                "Con más de 10 años de estudios y preparación autodidacta, encontré mis más grandes pasiones en la fotografía, la animación 3D, los efectos visuales y las interfaces de usuario.",
            ],
            background: {
                name: "Catedral de Cartago",
                urls: {
                    small: "/assets/backgrounds/catedral_background_small.png",
                    medium: "/assets/backgrounds/catedral_background_medium.png",
                    large: "/assets/backgrounds/catedral_background_large.png",
                },
            },
        },
        {
            id: uuidv4(),
            description: [
                "Tuve un profundo deseo de estudiar Cinematografía, carrera que no pude empezar por razones económicas.",
                "En su lugar, ingresé a Ingeniería de Sistemas, un mundo que parecía todo lo opuesto y que me desafió por muchos semestres.",
            ],
            background: {
                name: "Universidad Tecnológica de Pereira",
                urls: {
                    small: "/assets/backgrounds/utp_background_small.png",
                    medium: "/assets/backgrounds/utp_background_medium.png",
                    large: "/assets/backgrounds/utp_background_large.png",
                },
            },
        },
        {
            id: uuidv4(),
            description: [
                "Entre cálculos y líneas de código, finalmente encontré aquella disciplina donde el arte y la tecnología se complementaban, donde descubrí que ya no era un estudiante en la carrera equivocada, sino un artista que buscaba darle color y vida a un campo de la ciencia predominado por los números.",
            ],
            background: {
                name: "Global Game Jam 2019",
                urls: {
                    small: "/assets/backgrounds/ggj_background_small.png",
                    medium: "/assets/backgrounds/ggj_background_medium.png",
                    large: "/assets/backgrounds/ggj_background_large.png",
                },
            },
        },
        {
            id: uuidv4(),
            description: [
                "Hoy, busco nuevas oportunidades para seguir aprendiendo, para potenciar mis habilidades y cumplir mis metas. Busco que los demás puedan ver la importancia que tiene el arte y el diseño en el mundo del software, y busco que mi historia sea una motivación para que cada obstáculo se convierta en un impulso para llegar cada vez más lejos.",
                "¿Estas listo para hacer parte de esta historia?",
            ],
            background: {
                name: "Mirador Cartago - Pereira",
                urls: {
                    small: "/assets/backgrounds/mountains_background_small.png",
                    medium: "/assets/backgrounds/mountains_background_medium.png",
                    large: "/assets/backgrounds/mountains_background_large.png",
                },
            },
        },
    ],
};

export default (req, res) => {
    const language = req.cookies["next-i18next"];

    try {
        res.statusCode = 200;
        res.json({
            stories: stories[language],
        });
    } catch (err) {
        res.statusCode = 404;
        res.json({
            error: "Language not found",
        });
    }
};
