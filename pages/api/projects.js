const projects = {
    en: [
        {
            id: "avengers-web",
            name: "Avengers - The Infinity Web",
            date: "2020",
            status: "PRODUCTION",
            description: [
                "It really seemed endless, it was a challenge that I set myself a long time ago while looking for projects that would take my programming and layout skills to the next level. A very striking design made by Manuel Rovira, a designer that I admire a lot.",
                "During its development, I tried different React.js trends to arrive at its result, global stylesheets, sass, styled components, css modules, redux (I removed it more than once), context and hooks. It was a development of a lot of trial and error, I am still polishing it today.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/avengers/avengers_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/avengers/avengers_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/avengers/avengers_cover.jpg",
            url: "https://avengers-web.vercel.app/",
        },
        {
            id: "landing-page-woldev",
            name: "Landing Page Woldev",
            date: "2020",
            status: "PRODUCTION",
            description: [
                "The company needed a presence in search engines and to get new clients, so I was in charge of making a very attractive cover letter: a landing page.",
                "My job consisted of designing all the experience, assets, animations and programming it entirely under the latest React technologies.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/woldev/woldev_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/woldev/woldev_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/woldev/woldev_cover.jpg",
            url: "https://www.woldev.co",
        },
        {
            id: "cambiabits",
            name: "CambiaBits",
            date: "2019 - Present",
            status: "DEVELOPMENT",
            description: [
                "As the Tery-Bit ecosystem continued to grow, a new need arose in our users: to exchange Bitcoin for cash.",
                "So we decided to launch a native mobile app, where users could reserve the sale of their Bitcoin, safely approach the authorized physical points and receive their cash.",
                "My job was to take the process from the UX to the UI, since it was developed in a technology that I am still learning: Flutter.",
                "Its launch was delayed by # covid-19, but I look forward to seeing it in production very soon.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/cambiabits/cambiabits_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/cambiabits/cambiabits_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/cambiabits/cambiabits_cover.jpg",
            behance: "https://www.behance.net/gallery/102931097/CambiaBits-BTC-Mobile-App",
        },
        {
            id: "fny-ecommerce",
            name: "Fantasías New York – Ecommerce",
            date: "2019 - Present",
            status: "DEVELOPMENT",
            description: [
                "One of our best clients contacted us to develop a fairly robust software, an ERP (Enterprise Resource Planning), to migrate its entire obsolete system (of those blue business consoles) to a more modern one that would respond to the new needs of the warehouse , including selling their hundreds of thousands of products on the web.",
                "It was a challenge to respect the “colorful” essence of the brand to create a clean, modern and competitive e-commerce. We convinced the customer that “less is more” and that all color should focus on the products, not on their surroundings.",
                "My job consisted in designing all e-commerce experiences and interfaces for further development.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/ecommerce_fny/ecommerce_fny_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/ecommerce_fny/ecommerce_fny_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/ecommerce_fny/ecommerce_fny_cover.jpg",
            behance:
                "https://www.behance.net/gallery/105556619/Fantasias-New-York-E-commerce-Website",
        },
        {
            id: "space-drop-it",
            name: "Space Drop It",
            date: "2019",
            status: "PRODUCTION",
            description: [
                "A mobile video game that consisted of a basic but fun mechanic: combining colors to avoid hitting the barriers. It was a product we developed to refresh ourselves a bit from Tery-Bit's constant and exhausting work.",
                "My job consisted of taking the Game Design Document, designing the game experience, the interfaces and all the assets that it included, including an advanced topic such as shaders.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/space_drop_it/space_drop_it_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/space_drop_it/space_drop_it_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/space_drop_it/space_drop_it_cover.jpg",
            url: "https://play.google.com/store/apps/details?id=com.Woldev.SpaceDropIt&hl=es_CO",
            behance: "https://www.behance.net/gallery/96421873/Space-Drop-It",
        },
        {
            id: "izi-ads",
            name: "IZI Anuncios",
            date: "2018 - 2019",
            status: "PRODUCTION",
            description: [
                "In short words, this project consisted on a platform to upload ads and display them in video games developed by Woldev, such as Google Admob, but cheaper for both parties. We had already developed this functionality on the Tery-Bit landing page, but the team decided to separate it to include the service in our future apps.",
                "My job consisted of giving the service a new look & feel and migrating modules to the new project in the company of the development team.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/izi/izi_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/izi/izi_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/izi/izi_cover.jpg",
            url: "https://www.izianuncio.com",
            behance: "https://www.behance.net/gallery/93814497/IZI-Anuncios-Advertisement-Service",
        },
        {
            id: "tery-bit-landing-page",
            name: "Tery-Bit Landing Page",
            date: "2018 - Present",
            status: "PRODUCTION",
            description: [
                "Each time Tery-Bit was gaining popularity, it was more necessary to complement the video game experience with a platform to see the progress of the players, their ranking and make Bitcoin transfers.",
                "My job consisted mainly of turning the requirements into very attractive interfaces. Once the process was finished, I became involved in the development of the application, mentoring and programming some functionalities.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/terybit/terybit_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/terybit/terybit_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/terybit/terybit_cover.jpg",
            url: "https://www.tery-bit.com",
            behance: "https://www.behance.net/gallery/80762783/Tery-Bit-Landing-Page",
        },
        {
            id: "tery-bit-game",
            name: "Tery-Bit",
            date: "2018 - Present",
            status: "PRODUCTION",
            description: [
                "The most recognized product in Woldev, a mobile video game to earn Bitcoin by playing, complemented with a growth strategy based on multi-level marketing. It has been a great challenge for our team at the product, development and infrastructure level.",
                "I participated in its creation from the initial idea, designing the experience, interfaces, and game assets throughout its constant updates, facing problems such as hacking attempts, accessibility failures and engine limitations.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/terybit_app/terybit_app_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/terybit_app/terybit_app_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/terybit_app/terybit_app_cover.jpg",
            url: "https://play.google.com/store/apps/details?id=com.TeryBit.TeryBit",
            behance: "https://www.behance.net/gallery/105746911/Tery-Bit-BTC-Videogame",
        },
    ],
    es: [
        {
            id: "avengers-web",
            name: "Avengers - La web infinita",
            date: "2020",
            status: "PRODUCTION",
            description: [
                "Realmente parecía infinita, fue un reto que me propuse hace mucho tiempo mientras buscaba proyectos que llevaran mis habilidades de programación y maquetación a un siguiente nivel. Un diseño muy llamativo realizado por Manuel Rovira, un diseñador que admiro mucho.",
                "Durante su desarrollo, probé distintas tendencias de React.js para llegar a su resultado, hojas de estilo globales, sass, styled components, css modules, redux (lo quité más de una vez), context y hooks. Fue un desarrollo de mucha prueba y error, actualmente lo sigo puliendo.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/avengers/avengers_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/avengers/avengers_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/avengers/avengers_cover.jpg",
            url: "https://avengers-web.vercel.app/",
        },
        {
            id: "landing-page-woldev",
            name: "Landing Page Woldev",
            date: "2020",
            status: "PRODUCTION",
            description: [
                "La empresa necesitaba presencia en los buscadores y conseguir nuevos clientes, por lo que me encargué de hacer una carta de presentación muy atractiva: una landing page.",
                "Mi trabajo consistió en diseñar toda la experiencia, los assets, las animaciones y programarla en su totalidad bajo las últimas tecnologías de React.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/woldev/woldev_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/woldev/woldev_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/woldev/woldev_cover.jpg",
            url: "https://www.woldev.co",
        },
        {
            id: "cambiabits",
            name: "CambiaBits",
            date: "2019 - Actualidad",
            status: "DEVELOPMENT",
            description: [
                "Mientras el ecosistema de Tery-Bit seguía creciendo, surgió una nueva necesidad en nuestros usuarios: cambiar el Bitcoin por efectivo.",
                "Así que decidimos sacar una app móvil nativa, donde los usuarios pudieran reservar la venta de sus Bitcoin, acercarse con toda seguridad los puntos físicos autorizados y recibir su dinero en efectivo.",
                "Mi trabajo consistió únicamente en llevar el proceso desde el UX hasta el UI, ya que se desarrolló en una tecnología que aún estoy aprendiendo: Flutter.",
                "Su lanzamiento se retrasó por el #covid-19, pero espero con ansias verla en producción muy pronto.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/cambiabits/cambiabits_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/cambiabits/cambiabits_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/cambiabits/cambiabits_cover.jpg",
            behance: "https://www.behance.net/gallery/102931097/CambiaBits-BTC-Mobile-App",
        },
        {
            id: "fny-ecommerce",
            name: "Fantasías New York – Ecommerce",
            date: "2019 - Actualidad",
            status: "DEVELOPMENT",
            description: [
                "Uno de nuestros mejores clientes nos contactó para desarrollar un software bastante robusto, un ERP (Enterprise Resource Planning), para migrar todo su sistema obsoleto (de esas consolas azules de los negocios) por uno más moderno y que respondiera a las nuevas necesidades del almacén, entre ellas vender sus cientos de miles de productos en la web.",
                "Fue todo un reto respetar la esencia “colorida” de la marca para crear un e-commerce limpio, moderno y competitivo. Convencimos al cliente de que “menos es más” y que todo el color debía centrarse en los productos, no en lo que los rodeaba.",
                "Mi trabajo consistió en diseñar todas las experiencias e interfaces del e-commerce para su posterior desarrollo.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/ecommerce_fny/ecommerce_fny_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/ecommerce_fny/ecommerce_fny_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/ecommerce_fny/ecommerce_fny_cover.jpg",
            behance:
                "https://www.behance.net/gallery/105556619/Fantasias-New-York-E-commerce-Website",
        },
        {
            id: "space-drop-it",
            name: "Space Drop It",
            date: "2019",
            status: "PRODUCTION",
            description: [
                "Un videojuego móvil que consistía en una mecánica básica pero divertida: combinar colores para evitar chocarse con las barreras. Fue un producto que desarrollamos para refrescarnos un poco del trabajo constante y agotador de Tery-Bit.",
                "Mi trabajo consistió en tomar el Game Design Document, diseñar la experiencia de juego, las interfaces y todos los assets que esté incluía, incluyendo un tema avanzado como los shaders.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/space_drop_it/space_drop_it_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/space_drop_it/space_drop_it_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/space_drop_it/space_drop_it_cover.jpg",
            url: "https://play.google.com/store/apps/details?id=com.Woldev.SpaceDropIt&hl=es_CO",
            behance: "https://www.behance.net/gallery/96421873/Space-Drop-It",
        },
        {
            id: "izi-ads",
            name: "IZI Anuncios",
            date: "2018 - 2019",
            status: "PRODUCTION",
            description: [
                "En pocas palabras, este proyecto consistía en una plataforma para subir anuncios y mostrarlos en los videojuegos desarrollados por Woldev, como Google Admob, pero más económico para ambas partes. Esta funcionalidad ya la habíamos desarrollado en la landing page de Tery-Bit, pero el equipo decidió separarla para incluir el servicio en nuestros futuros lanzamientos.",
                "Mi trabajo consistió en darle un nuevo look & feel al servicio y migrar módulos al nuevo proyecto en compañía del equipo de desarrollo.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/izi/izi_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/izi/izi_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/izi/izi_cover.jpg",
            url: "https://www.izianuncio.com",
            behance: "https://www.behance.net/gallery/93814497/IZI-Anuncios-Advertisement-Service",
        },
        {
            id: "tery-bit-landing-page",
            name: "Tery-Bit Landing Page",
            date: "2018 - Actualidad",
            status: "PRODUCTION",
            description: [
                "Cada vez que Tery-Bit iba ganando popularidad, era más necesario complementar la experiencia del videojuego con una plataforma para ver el progreso de los jugadores, su ranking y hacer transferencias de Bitcoin.",
                "Mi trabajo consistió principalmente en convertir los requerimientos en interfaces muy llamativas. Una vez finalizado el proceso, me integré en el desarrollo de la aplicación, mentoreando y programando algunas funcionalidades.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/terybit/terybit_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/terybit/terybit_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/terybit/terybit_cover.jpg",
            url: "https://www.tery-bit.com",
            behance: "https://www.behance.net/gallery/80762783/Tery-Bit-Landing-Page",
        },
        {
            id: "tery-bit-game",
            name: "Tery-Bit",
            date: "2018 - Actualidad",
            status: "PRODUCTION",
            description: [
                "El producto con más reconocimiento en Woldev, un videojuego móvil para ganar Bitcoin jugando, complementado con una estrategia de crecimiento basado en marketing multinivel. Ha sido un gran reto para nuestro equipo a nivel de producto, desarrollo e infraestructura.",
                "Participé en su creación desde el planteamiento de la idea inicial, diseñando la experiencia, las interfaces, y los assets del juego a lo largo de sus constantes actualizaciones, afrontando problemas como intentos de hackeo, fallas de accesibilidad y limitaciones del engine.",
            ],
            thumbnail: {
                src_1x: "/assets/projects/terybit_app/terybit_app_cover_thumbnail_1x.jpg",
                src_2x: "/assets/projects/terybit_app/terybit_app_cover_thumbnail_2x.jpg",
            },
            cover: "/assets/projects/terybit_app/terybit_app_cover.jpg",
            url: "https://play.google.com/store/apps/details?id=com.TeryBit.TeryBit",
            behance: "https://www.behance.net/gallery/105746911/Tery-Bit-BTC-Videogame",
        },
    ],
};

export default (req, res) => {
    const language = req.cookies["next-i18next"];

    try {
        res.statusCode = 200;
        res.json({
            projects: projects[language],
        });
    } catch (err) {
        res.statusCode = 404;
        res.json({
            error: "Language not found",
        });
    }
};
