//TODO: Utilizar UUID para los elementos y evitar keys con el index

export default (req, res) => {
    res.statusCode = 200;
    res.json({
        studies: [
            {
                id: "utp",
                institute: "Universidad Tecnológica de Pereira",
                logo: "/assets/logos/utp_logo.png",
                courses: [
                    {
                        id: "utp_0",
                        name: "Ingeniería de Sistemas y Computación",
                        date: "2013 - 2018",
                        duration: "11 Semestres",
                    },
                ],
            },
            {
                id: "udemy",
                institute: "Udemy",
                logo: "/assets/logos/udemy_logo.svg",
                courses: [
                    {
                        id: "udemy_0",
                        name: "Universidad React: De Cero a Master + 5 Cursos de Regalo",
                        date: "2020",
                        duration: "20 horas",
                    },
                    {
                        id: "udemy_1",
                        name: "ReactJS + Redux + ES6. Completo ¡De 0 a experto!",
                        date: "2019",
                        duration: "25 horas 30 minutos",
                    },
                    {
                        id: "udemy_3",
                        name: "Node: De 0 a experto",
                        date: "2019",
                        duration: "20 horas",
                    },
                    {
                        id: "udemy_4",
                        name: "Visual Studio Code: Mejora tu velocidad para codificar",
                        date: "2019",
                        duration: "1 hora 30 minutos",
                    },
                ],
            },
            {
                id: "pluralsight",
                institute: "Pluralsight",
                logo: "/assets/logos/pluralsight_logo.svg",
                courses: [
                    {
                        id: "pluralsight_0",
                        name: "Optimize Performance for React",
                        date: "2020",
                        duration: "56 minutos",
                    },
                    {
                        id: "pluralsight_1",
                        name: "Building a Full Stack App with React and Express",
                        date: "2020",
                        duration: "3 horas 13 minutos",
                    },
                    {
                        id: "pluralsight_2",
                        name: "Building Layouts with the CSS Grid",
                        date: "2020",
                        duration: "1 hora 16 minutos",
                    },
                    {
                        id: "pluralsight_3",
                        name: "React Native: Getting Started",
                        date: "2020",
                        duration: "1 hora 49 minutos",
                    },
                    {
                        id: "pluralsight_4",
                        name: "Interaction Design Fundamentals",
                        date: "2020",
                        duration: "1 hora 22 minutos",
                    },
                    {
                        id: "pluralsight_5",
                        name: "UX Research Analysis",
                        date: "2020",
                        duration: "1 hora 3 minutos",
                    },
                    {
                        id: "pluralsight_6",
                        name: "Conducting UX Research",
                        date: "2020",
                        duration: "1 hora 20 minutos",
                    },
                    {
                        id: "pluralsight_7",
                        name: "Psychology of Interaction Design",
                        date: "2020",
                        duration: "50 minutos",
                    },
                    {
                        id: "pluralsight_8",
                        name: "Color Theory Fundamentals",
                        date: "2020",
                        duration: "32 minutos",
                    },
                    {
                        id: "pluralsight_9",
                        name: "Building Your First Machine Learning Solution",
                        date: "2020",
                        duration: "2 horas 41 minutos",
                    },
                ],
            },
            {
                id: "platzi",
                institute: "Platzi",
                logo: "/assets/logos/platzi_logo.svg",
                courses: [
                    {
                        id: "platzi_0",
                        name: "Curso de ECMAScript 6+",
                        date: "2020",
                        duration: "12 horas",
                    },
                    {
                        id: "platzi_1",
                        name: "Curso de HTML y CSS",
                        date: "2020",
                        duration: "18 horas",
                    },
                    {
                        id: "platzi_2",
                        name: "Curso de React.js",
                        date: "2018",
                        duration: "21 horas",
                    },
                    {
                        id: "platzi_3",
                        name: "Curso de Next.js",
                        date: "2020",
                        duration: "13 horas",
                    },
                    {
                        id: "platzi_4",
                        name: "Curso de Progressive Web Apps con React.js",
                        date: "2020",
                        duration: "8 horas",
                    },
                    {
                        id: "platzi_5",
                        name: "Curso de Python",
                        date: "2020",
                        duration: "28 horas",
                    },
                    {
                        id: "platzi_6",
                        name: "Curso de ingeniería de datos con Python",
                        date: "2020",
                        duration: "15 horas",
                    },
                    {
                        id: "platzi_7",
                        name: "Machine Learning aplicado con Python",
                        date: "2020",
                        duration: "21 horas",
                    },
                ],
            },
            {
                id: "youtube",
                institute: "Youtube",
                logo: "/assets/logos/youtube_logo.svg",
                courses: [
                    {
                        id: "youtube_0",
                        name: "Curso CSS para Principiantes",
                        date: "2016",
                        duration: "1 hora 40 minutos",
                    },
                    {
                        id: "youtube_1",
                        name: "Introducción a SVG",
                        date: "2018",
                        duration: "1 hora",
                    },
                    {
                        id: "youtube_2",
                        name: "Webpack 4, Curso Práctico",
                        date: "2020",
                        duration: "1 hora 18 minutos",
                    },
                    {
                        id: "youtube_3",
                        name: "Curso básico de Sass",
                        date: "2017",
                        duration: "1 hora",
                    },
                    {
                        id: "youtube_4",
                        name: "Curso completo de Bootstrap",
                        date: "2017",
                        duration: "48 minutos",
                    },
                ],
            },
        ],
    });
};
