const leerLinea = require("readline")
const AnimalFactory = require("./AnimalFactory")

const InterfazConsola = leerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})

InterfazConsola.question("Por favor ingrese el nombre del animal", (name) => {

    InterfazConsola.question("Por favor ingrese la edad del animal", (age) => {

        InterfazConsola.question("Por favor ingrese el color del animal", (color) => {

            InterfazConsola.question("Por favor igrese la raza del animal", (raza) => {

               console.log(AnimalFactory(name, age, color, raza));

               InterfazConsola.close()
                


            })
        })
    }) 

})