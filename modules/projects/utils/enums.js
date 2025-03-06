//translateStatus retorna el nombre del estado para su posterior traduccion con i18n
export const translateStatus = (string) => {
    switch (string) {
        case "PRODUCTION":
            return "status.production";
        case "DEVELOPMENT":
            return "status.development";
        case "CONCEPT":
            return "status.concept";
        default:
            return "status.error";
    }
};
