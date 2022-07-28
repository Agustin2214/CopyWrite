const express = require("express")
const cors = require("cors");




class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001


//path
        this.iecho  = '/iecho'
        


 

//Lectura y parseo a JSON
this.app.use(express.json())

//Middlewates
        this.middlewares()
//Rutas de mi aplicacion
        this.routes()

}



    middlewares(){
//Cors
        this.app.use(cors())

        this.app.use(express.json())
//Directorio publico
        this.app.use(express.static('public'));
//
       
}

    routes(){
        this.app.use(this.iecho,require('../routes/iecho'))
        
  
}

    listen(){

        this.app.listen(this.port,()=>{
        console.log(`Server running on port`,this.port)
    });
}

}
console.log()

module.exports = Server;