export default (req, res) => {
    res.statusCode = 200;
    res.json({
        projects: [
            {
                id: "avengers-web",
                name: "Avengers - La web infinita",
                date: "2020",
                status: "PRODUCTION",
                description: [
                    "Realmente parecía infinita, fue un reto que me propuse hace mucho tiempo mientras buscaba proyectos que llevaran mis habilidades de programación y maquetación a un siguiente nivel. Un diseño muy llamativo realizado por Manuel Rovira, un diseñador que admiro mucho.",
                    "Durante su desarrollo, probé distintas tendencias de React.js para llegar a su resultado, hojas de estilo globales, sass, styled components, css modules, redux (lo quité más de una vez), context y hooks. Fue un desarrollo de mucha prueba y error, actualmente lo sigo puliendo.",
                ],
                thumbnail: "/assets/projects/avengers_cover_thumbnail.png",
                cover: "/assets/projects/avengers_cover.jpg",
                url: "https://avengers-web.vercel.app/",
            },
            {
                id: "landing-page-woldev",
                name: "Landing Page Woldev",
                date: "2020",
                status: "DEVELOPMENT",
                description: [
                    "La empresa necesitaba presencia en los buscadores y conseguir nuevos clientes, por lo que me encargué de hacer una carta de presentación muy atractiva: una landing page.",
                    "Mi trabajo consistió en diseñar toda la experiencia, los assets, las animaciones y programarla en su totalidad bajo las últimas tecnologías de React.",
                ],
                thumbnail: "/assets/projects/woldev_cover_thumbnail.png",
                cover: "/assets/projects/woldev_cover.jpg",
                url: "https://dev.woldev.co",
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
                thumbnail: "/assets/projects/cambiabits_cover_thumbnail.png",
                cover: "/assets/projects/cambiabits_cover.jpg",
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
                thumbnail: "/assets/projects/ecommerce_fny_cover_thumbnail.png",
                cover: "/assets/projects/ecommerce_fny_cover.jpg",
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
                thumbnail: "/assets/projects/space_drop_it_cover_thumbnail.png",
                cover: "/assets/projects/space_drop_it_cover.jpg",
                url:
                    "https://play.google.com/store/apps/details?id=com.Woldev.SpaceDropIt&hl=es_CO",
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
                thumbnail: "/assets/projects/izi_cover_thumbnail.png",
                cover: "/assets/projects/izi_cover.jpg",
                url: "https://www.izianuncio.com",
                behance:
                    "https://www.behance.net/gallery/93814497/IZI-Anuncios-Advertisement-Service",
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
                thumbnail: "/assets/projects/terybit_cover_thumbnail.png",
                cover: "/assets/projects/terybit_cover.jpg",
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
                thumbnail: "/assets/projects/terybit_app_cover_thumbnail.png",
                cover: "/assets/projects/terybit_app_cover.jpg",
                url: "https://play.google.com/store/apps/details?id=com.TeryBit.TeryBit",
                behance: "https://www.behance.net/gallery/105746911/Tery-Bit-BTC-Videogame",
            },
        ],
    });
};
