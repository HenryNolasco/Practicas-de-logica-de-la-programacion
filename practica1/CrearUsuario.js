const { log } = require("console");
const leerLinea = require("readline");

const interfazConsola = leerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})

interfazConsola.question("Por favor ingrese el nombre completo: ", (nombre) => {

    if (nombre.length < 3) {
        console.log("Por favor ingrese un nombre valido de almenos 3 caracteres");
        interfazConsola.close();
        return;
        
    }

    interfazConsola.question("Por favor ingrese su correo: ", (correo)=> {
        if (!correo.includes("@")) {
            console.log("Por favor ingrese un correo valido");
            interfazConsola.close();
            return;
            
        }

        interfazConsola.question("Por favor ingrese la contraseña: ", (password)=> {
            if (password.length <8) {
                console.log("La contraseña debe ser mayor a 8 caracteres");
                interfazConsola.close()
                return;

            }
            
            console.log("Usuario creado exictosamente");
            console.log(`nombre:${nombre}\ncorreo:${correo}\nPassword:${password}`);
            interfazConsola.close()
            
            

        })
    })
})
