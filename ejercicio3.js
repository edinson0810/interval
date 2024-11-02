function map(array, callback) {
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        const elemento = array[i];
        const resultadoCallback = callback(elemento);
        resultado.push(resultadoCallback)
        
    } return resultado;
}
let numero = [10, 20, 30, 40];
let division = map(numero, (numero) => numero / 2);

console.log(division);






