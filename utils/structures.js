export const mergeArrayOfObjects = (array) => {
    return array.reduce((accumulator, currentValue) => Object.assign(accumulator, currentValue));
};
