function cuadrado(valor) {
    if (typeof valor !== "number") {
        return Promise.reject("Cuidado, el valor que ingreso no es un numero");
    }
    return new Promise((resolve, reject) => {
        resolve({
            valor: valor,
            resultado: valor * valor
        });
    });
}
// imprime la promesa
cuadrado(1).then((obj) => {
console.log(obj);
return cuadrado(++obj.valor);
}).then((obj) => {
console.log(obj);
return cuadrado(++obj.valor);
}).then((obj) => {
console.log(obj);
return cuadrado(++obj.valor);
}).then((obj) =>{
 console.log(obj);
 
});

