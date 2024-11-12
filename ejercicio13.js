function miPromesa () {
    setTimeout(() => {
        
        return new Promise((resolve => (resolve))  )
     }, 3000);

}
let respuesta =miPromesa()
// console.log((respuesta));

miPromesa().then(() => console.log("Promesa Resuelta"));



// let miPromesa = new Promise(resolve, reject) {
//    
//     setTimeout (()=> {
//         // resolve("Promesa Resuelta");
//     }, 3000);
// })

// miPromesa.then(mensaje => console.log(mensaje));