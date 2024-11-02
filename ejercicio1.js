// variable para ingresar el primer numero
let desde = parseFloat(prompt("Ingrese el numero donde quiere iniciar"));
// variable para ingresar el segundo numero
let hasta = parseFloat(prompt("Ingrese el numero donde quiere llegar"));

function imprimirNumeros() {
    // una constancia para que se muestre los numeros cada 1000 ms
    const intervalo = setInterval(() =>{
        // comience a mostrar el numero desde
        console.log(desde);
// condicion que dice que si la variable desde es estrictamente igual a la variable hasta
        if (desde === hasta) {
            // se debe detener
            clearInterval(intervalo)
            // de lo contrario
        } else  {
            // salga el siguiente mensaje
            console.log("Ingrese valores validos");
            // se debe detener
            clearInterval(intervalo)
            
        }
        // comience a sumar desde el numero desde
        desde++ 
    }, 1000)
}
// llamamos la funcion
imprimirNumeros();









