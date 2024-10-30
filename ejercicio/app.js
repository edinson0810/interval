import { asignaciones, users } from "./data.js";
import { getAsignacionesById, getUserById } from "./modulo.js";

 getUserById(2, function (error, user) {
   if (error) {
        console.log(error);
    } else {
        console.log(user);

        if (user.asignaciones.length > 0) {
            for ( let i = 0; user.asignaciones.length > i; i++){
              getAsignacionesById(user.asignaciones[i], function(error, asignacion) {
                console.log(asignacion);
            })
        }
        } else {
            console.log("No tiene asignaciones");
            
        }
    }
});










