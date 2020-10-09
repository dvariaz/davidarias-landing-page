export const translateStatus = (string) => {
    switch (string) {
        case "PRODUCTION":
            return "En producción";
        case "DEVELOPMENT":
            return "En desarrollo";
        case "CONCEPT":
            return "En concepto";
        default:
            return "Error de traducción";
    }
};

export const mergeArrayOfObjects = (array) => {
    return array.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
};