function every(array, callback) {
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!callback(element)) {
            return false
        }
    } return true;
}

let numero = [1, 5, 7,];
let TodosImpares = every(numero, (numero) => numero % 2 !== 0);
 console.log(TodosImpares);
 
