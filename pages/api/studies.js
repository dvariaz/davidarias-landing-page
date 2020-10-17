import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
    res.statusCode = 200;
    res.json({
        studies: [
            {
                id: uuidv4(),
                institute: "Universidad Tecnológica de Pereira",
                logo: "/assets/logos/utp_logo.png",
                courses: [
                    {
                        id: uuidv4(),
                        name: "Ingeniería de Sistemas y Computación",
                        date: "2013 - 2018",
                        duration: "11 Semestres",
                    },
                ],
            },
            {
                id: uuidv4(),
                institute: "Udemy",
                logo: "/assets/logos/udemy_logo.svg",
                courses: [
                    {
                        id: uuidv4(),
                        name: "Universidad React: De Cero a Master + 5 Cursos de Regalo",
                        date: "2020",
                        duration: "20 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "ReactJS + Redux + ES6. Completo ¡De 0 a experto!",
                        date: "2019",
                        duration: "25 horas 30 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Node: De 0 a experto",
                        date: "2019",
                        duration: "20 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Visual Studio Code: Mejora tu velocidad para codificar",
                        date: "2019",
                        duration: "1 hora 30 minutos",
                    },
                ],
            },
            {
                id: uuidv4(),
                institute: "Pluralsight",
                logo: "/assets/logos/pluralsight_logo.svg",
                courses: [
                    {
                        id: uuidv4(),
                        name: "Optimize Performance for React",
                        date: "2020",
                        duration: "56 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Building a Full Stack App with React and Express",
                        date: "2020",
                        duration: "3 horas 13 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Building Layouts with the CSS Grid",
                        date: "2020",
                        duration: "1 hora 16 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "React Native: Getting Started",
                        date: "2020",
                        duration: "1 hora 49 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Interaction Design Fundamentals",
                        date: "2020",
                        duration: "1 hora 22 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "UX Research Analysis",
                        date: "2020",
                        duration: "1 hora 3 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Conducting UX Research",
                        date: "2020",
                        duration: "1 hora 20 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Psychology of Interaction Design",
                        date: "2020",
                        duration: "50 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Color Theory Fundamentals",
                        date: "2020",
                        duration: "32 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Building Your First Machine Learning Solution",
                        date: "2020",
                        duration: "2 horas 41 minutos",
                    },
                ],
            },
            {
                id: uuidv4(),
                institute: "Platzi",
                logo: "/assets/logos/platzi_logo.svg",
                courses: [
                    {
                        id: uuidv4(),
                        name: "Curso de ECMAScript 6+",
                        date: "2020",
                        duration: "12 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de HTML y CSS",
                        date: "2020",
                        duration: "18 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de React.js",
                        date: "2018",
                        duration: "21 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Next.js",
                        date: "2020",
                        duration: "13 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Progressive Web Apps con React.js",
                        date: "2020",
                        duration: "8 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Python",
                        date: "2020",
                        duration: "28 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de ingeniería de datos con Python",
                        date: "2020",
                        duration: "15 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Machine Learning aplicado con Python",
                        date: "2020",
                        duration: "21 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Redux por Bedu",
                        date: "2020",
                        duration: "23 horas",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Closures y Scope en Javascript",
                        date: "2020",
                        duration: "13 horas",
                    },
                ],
            },
            {
                id: uuidv4(),
                institute: "Youtube",
                logo: "/assets/logos/youtube_logo.svg",
                courses: [
                    {
                        id: uuidv4(),
                        name: "Curso CSS para Principiantes",
                        date: "2016",
                        duration: "1 hora 40 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Introducción a SVG",
                        date: "2018",
                        duration: "1 hora",
                    },
                    {
                        id: uuidv4(),
                        name: "Webpack 4, Curso Práctico",
                        date: "2020",
                        duration: "1 hora 18 minutos",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso básico de Sass",
                        date: "2017",
                        duration: "1 hora",
                    },
                    {
                        id: uuidv4(),
                        name: "Curso completo de Bootstrap",
                        date: "2017",
                        duration: "48 minutos",
                    },
                ],
            },
        ],
    });
};
