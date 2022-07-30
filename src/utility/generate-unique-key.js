export const generateUniqueKey = (index) => {
    return `${index}__${Math.round(Date.now() / 1000)}`
}