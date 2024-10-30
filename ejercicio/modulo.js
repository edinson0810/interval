import { asignaciones, users } from "./data.js";

export function  getUserById(id, callback) {
const user = users.find(function (user){
    return user.id === id;
});
if(!user){
callback(`No encontramos usuario con el id ${id}`); 
} else {
callback(null, user);
}
}

export function getAsignacionesById(id, callback) {
    console.log(id);
    const asignacion = asignaciones.find(function(asignacion) {
        return asignacion.id === id;
    })
    if (! asignacion) {
        callback(`No encontramos asignaicones para el usuario: ${id}`);
    } else {
        callback(null, asignacion);
    }
    }


