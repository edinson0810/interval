function miPromesa () {
    // setTimeout(() => {
        
        return new Promise((resolve => (resolve))  )
    // }, 3000);

}
let respuesta =miPromesa()
console.log((respuesta));

// miPromesa().then(() => console.log("Promesa Resuelta")
// );

// let numero1 = parseFloat(prompt("ingrese el primer numero"));
// let numero2 = parseFloat(prompt("ingrese el numero dos"));
// let suma = numero1 + numero2;

// let miPromesa = new Promise(resolve, reject) {
//    if (suma > 20) {
//     try {
//         resolve("Promesa Cumplida" )
//     } catch (error) {
//         reject("erro en la promesa")
//     }}
//     setTimeout (()=> {
//         // resolve("Promesa Resuelta");
//     }, 3000);
// })

// miPromesa.then(mensaje => console.log(mensaje));