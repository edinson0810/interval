function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element)) {
            return true
        }
    } return false
}

const numero = [1, 3, 5, 8];
const hayPares = some(numero, (numero) => numero % 2 === 0);

console.log(hayPares);
