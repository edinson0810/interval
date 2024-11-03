function filter(array, callback) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element)) {
            resultado.push(element)
        }
        
    } return resultado
}

let numero = [ 10, 6, 4, 5];
let menoresDeCinco = filter(numero,(numero) => numero < 5);
console.log(menoresDeCinco);


