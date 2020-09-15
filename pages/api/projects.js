export default (req, res) => {
    res.statusCode = 200;
    res.json({
        projects: [
            {
                id: 1,
                name: "Avengers Web - La web infinita",
                description: [
                    "Realmente parecía infinita, fue un reto que me propuse hace mucho tiempo mientras buscaba proyectos que llevaran mis habilidades de programación y maquetación a un siguiente nivel. Un diseño muy llamativo realizado por Manuel Rovira, un diseñador que admiro mucho.",
                    "Durante su desarrollo, probé distintas tendencias de React.js para llegar a su resultado, hojas de estilo globales, sass, styled components, css modules, redux (lo quité más de una vez), context y hooks. Fue un desarrollo de mucha prueba y error, actualmente lo sigo puliendo.",
                ],
                cover: "/assets/projects/avengers_cover.png",
                url: "https://avengers-web.vercel.app/",
            },
            {
                id: 2,
                name: "Landing Page Woldev",
                description: [
                    "La empresa necesitaba presencia en los buscadores y conseguir nuevos clientes, por lo que me encargué de hacer una carta de presentación muy atractiva: una landing page.",
                    "Mi trabajo consistió en diseñar toda la experiencia, los assets, las animaciones y programarla en su totalidad bajo las últimas tecnologías de React.",
                ],
                cover: "/assets/projects/woldev_cover.png",
                url: "https://dev.woldev.co",
            },
            {
                id: 3,
                name: "CambiaBits",
                description: [
                    "Mientras el ecosistema de Tery-Bit seguía creciendo, surgió una nueva necesidad en nuestros usuarios: cambiar el Bitcoin por efectivo.",
                    "Así que decidimos sacar una app móvil nativa, donde los usuarios pudieran reservar la venta de sus Bitcoin, acercarse con toda seguridad los puntos físicos autorizados y recibir su dinero en efectivo.",
                    "Mi trabajo consistió únicamente en llevar el proceso desde el UX hasta el UI, ya que se desarrolló en una tecnología aún estoy aprendiendo: Flutter.",
                    "Su lanzamiento se retrasó por el #covid-19, pero espero con ansias verla en producción muy pronto.",
                ],
                cover: "/assets/projects/cambiabits_cover.png",
                url: "https://www.behance.net/gallery/102931097/CambiaBits-BTC-Mobile-App",
            },
            {
                id: 4,
                name: "Fantasías New York – Ecommerce",
                description: [
                    "Este fue uno de los principales motivos por los que nos contrataron para desarrollar la ERP del almacén, el comercio electrónico. Una vez se digitalizara todo el inventario, se empezarían a ofrecer los productos por la página web oficial.",
                    "Fue todo un reto respetar la esencia “colorida” de la marca para crear un e-commerce limpio, moderno y competitivo. Convencimos al cliente de que “menos es más” y que todo el color debía centrarse en los productos, no en lo que los rodeaba.",
                    "Mi trabajo consistió en diseñar todas las experiencias e interfaces del e-commerce para su posterior desarrollo.",
                ],
                cover: "/assets/projects/ecommerce_fny_cover.png",
                url: "",
            },
            {
                id: 5,
                name: "Fantasías New York – ERP",
                description: [
                    "Uno de nuestros mejores clientes nos contactó para desarrollar un software bastante robusto, un ERP (Enterprise Resource Planning), para migrar todo su sistema obsoleto (de esas de consolas azules de los negocios) por uno más moderno y que respondiera a las nuevas necesidades del almacén.",
                    "Mi trabajo consistió desglosar el trabajo, tomar los requerimientos y diseñar interfaces amigables para trabajadores con poco conocimiento en tecnología y respetando los limites técnicos de desarrollo basándome en componentes de la librería de material design Vuetify.",
                    "Actualmente sigue en desarrollo.",
                ],
                cover: "/assets/projects/erpfny_cover.png",
                url: "",
            },
            {
                id: 6,
                name: "Space Drop It",
                description: [
                    "Un videojuego móvil que consistía en una mecánica básica pero divertida: combinar colores para evitar chocarse con las barreras. Fue un producto que desarrollamos para refrescarnos un poco del trabajo constante y agotador de Tery-Bit.",
                    "Mi trabajo consistió en tomar el GDD, diseñar la experiencia de juego, las interfaces y todos los assets que esté incluía, incluyendo un tema avanzado como los shaders.",
                ],
                cover: "/assets/projects/space_drop_it_cover.png",
                url:
                    "https://play.google.com/store/apps/details?id=com.Woldev.SpaceDropIt&hl=es_CO",
            },
            {
                id: 7,
                name: "IZI Anuncios",
                description: [
                    "En pocas palabras, este proyecto consistía en una plataforma para subir anuncios y mostrarlos en los videojuegos desarrollados por Woldev, como Google Admob, pero más económico para ambas partes. Esta funcionalidad ya la habíamos desarrollado en la landing page de Tery-Bit, pero el equipo decidió separarla para incluir el servicio en nuestros futuros lanzamientos.",
                    "Mi trabajo consistió en darle un nuevo look & feel al servicio y migrar módulos al nuevo proyecto en compañía del equipo de desarrollo.",
                ],
                cover: "/assets/projects/space_drop_it_cover.png",
                url: "https://www.izianuncio.com",
            },
            {
                id: 8,
                name: "Tery-Bit Landing Page",
                description: [
                    "Cada vez que Tery-Bit iba ganando popularidad, era más necesario complementar la experiencia del videojuego con una plataforma para ver el progreso de los jugadores, su ranking y hacer transferencias de Bitcoin.",
                    "Mi trabajo consistió principalmente en convertir los requerimientos en interfaces muy llamativas. Una vez finalizado el proceso, me integré en el desarrollo de la aplicación, mentoreando y programando algunas funcionalidades.",
                ],
                cover: "/assets/projects/terybit_cover.png",
                url: "https://www.tery-bit.com",
            },
        ],
    });
};
