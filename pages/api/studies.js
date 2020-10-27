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
                        duration: { semesters: 11 },
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
                        duration: { hours: 20 },
                    },
                    {
                        id: uuidv4(),
                        name: "ReactJS + Redux + ES6. Completo ¡De 0 a experto!",
                        date: "2019",
                        duration: { hours: 25, minutes: 30 },
                    },
                    {
                        id: uuidv4(),
                        name: "Node: De 0 a experto",
                        date: "2019",
                        duration: { hours: 20 },
                    },
                    {
                        id: uuidv4(),
                        name: "Visual Studio Code: Mejora tu velocidad para codificar",
                        date: "2019",
                        duration: { hours: 1, minutes: 30 },
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
                        duration: { minutes: 56 },
                    },
                    {
                        id: uuidv4(),
                        name: "Building a Full Stack App with React and Express",
                        date: "2020",
                        duration: { hours: 3, minutes: 13 },
                    },
                    {
                        id: uuidv4(),
                        name: "Building Layouts with the CSS Grid",
                        date: "2020",
                        duration: { hours: 1, minutes: 16 },
                    },
                    {
                        id: uuidv4(),
                        name: "React Native: Getting Started",
                        date: "2020",
                        duration: { hours: 1, minutes: 49 },
                    },
                    {
                        id: uuidv4(),
                        name: "Interaction Design Fundamentals",
                        date: "2020",
                        duration: { hours: 1, minutes: 22 },
                    },
                    {
                        id: uuidv4(),
                        name: "UX Research Analysis",
                        date: "2020",
                        duration: { hours: 1, minutes: 3 },
                    },
                    {
                        id: uuidv4(),
                        name: "Conducting UX Research",
                        date: "2020",
                        duration: { hours: 1, minutes: 20 },
                    },
                    {
                        id: uuidv4(),
                        name: "Psychology of Interaction Design",
                        date: "2020",
                        duration: { minutes: 50 },
                    },
                    {
                        id: uuidv4(),
                        name: "Color Theory Fundamentals",
                        date: "2020",
                        duration: { minutes: 32 },
                    },
                    {
                        id: uuidv4(),
                        name: "Building Your First Machine Learning Solution",
                        date: "2020",
                        duration: { hours: 2, minutes: 41 },
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
                        duration: { hours: 12 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de HTML y CSS",
                        date: "2020",
                        duration: { hours: 18 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de React.js",
                        date: "2018",
                        duration: { hours: 21 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Next.js",
                        date: "2020",
                        duration: { hours: 13 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Progressive Web Apps con React.js",
                        date: "2020",
                        duration: { hours: 8 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Python",
                        date: "2020",
                        duration: { hours: 28 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de ingeniería de datos con Python",
                        date: "2020",
                        duration: { hours: 15 },
                    },
                    {
                        id: uuidv4(),
                        name: "Machine Learning aplicado con Python",
                        date: "2020",
                        duration: { hours: 21 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Redux por Bedu",
                        date: "2020",
                        duration: { hours: 23 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso de Closures y Scope en Javascript",
                        date: "2020",
                        duration: { hours: 13 },
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
                        duration: { hours: 1, minutes: 40 },
                    },
                    {
                        id: uuidv4(),
                        name: "Introducción a SVG",
                        date: "2018",
                        duration: { hours: 1 },
                    },
                    {
                        id: uuidv4(),
                        name: "Webpack 4, Curso Práctico",
                        date: "2020",
                        duration: { hours: 1, minutes: 18 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso básico de Sass",
                        date: "2017",
                        duration: { hours: 1 },
                    },
                    {
                        id: uuidv4(),
                        name: "Curso completo de Bootstrap",
                        date: "2017",
                        duration: { minutes: 48 },
                    },
                ],
            },
        ],
    });
};
