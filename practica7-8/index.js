const consoleInterface = require("./console.service");
const createDatabase = require("./create.db.service");
const createUser = require("./create.user.service");
const {v4: uuid} = require("uuid");
const updateUsers = require("./update.user.service");
const daleteUserById = require("./delete.user.service");

const showUsers = require("./show.users.service");



const main =() => {

    try {

        consoleInterface.question("por favor ingrese una opcion\n1-crear base de datos\n2-crear un usuario\n3-actualizar usuario mediante su id\n4-eliminar un usuario por su id\n5-ver todos los usuarios", (option) => {

            switch(parseInt(option)) {
                case 1:

                createDatabase()
                
                setTimeout(() => {

                    main()
                      

                }, 3000)

                    break;
                case 2:

                    consoleInterface.question("Por favor ingresa tu nombre:", (nombre) => {
                        consoleInterface.question("Por favor ingrese su apellido:", (apellido) => {
                            consoleInterface.question("Por favor ingrese su dui:", (dui) => {
                                consoleInterface.question("Por favor ingrese su correo electronico:", (correo) => {

                                    const newUser = {
                                        id : uuid(),
                                        name : nombre,
                                        lastname : apellido,
                                        dui : dui,
                                        correo : correo
                                    }

                                    createUser(newUser)

                                    setTimeout(() => {

                                        main()

                                    }, 3000)

                                })



                            })
                        })
                    })

                break;

                 case 3:

                     consoleInterface.question("Por favor ingrese el id del usuario a actualizar", (id) => {

                        consoleInterface.question("Por favor ingrese el nombre", (nombre) => {

                            consoleInterface.question("Por favor ingresa el apellido", (apellido) => {

                                consoleInterface.question("Por favor ingresa tu dui", (dui) => {

                                    consoleInterface.question("Por favor ingresa tu correo", (correo) => {


                                        const newData = {
                                            name : nombre,
                                            lastname : apellido,
                                            dui : dui,
                                            correo : correo
                                        }

                                        updateUsers(id, newData)

                                        setTimeout(() => {
                                            main()

                                        }, 3000)
                                    })
                                })
                            }) 
                            
                        })    
                           
                    })   
                      

                break 
                
                
                case 4:

                    consoleInterface.question("Por favor ingrese el id del user quiere borrar", (id) => { 

                        daleteUserById(id)

                        setTimeout(() => {
                            main()
                        }, 3000)
                    })
                     
                break

            case 5:
                    
                    showUsers()

                    setTimeout(() => {
                        main()
                    }, 3000)
                    
            break 


                default:
                    break;

            }

        })
        
    } catch (error) {
        
        throw new Error(`${error}`);
    }
}

main()
