function callback(message) {
console.log(message);
}
function saludo(name, callback) {
    let mesagge = `Hola ${name}`
    callback(mesagge);
}
saludo("Edinson Barrios", callback);