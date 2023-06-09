const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.database')
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar Mongo
        this.conectarMongo();


        //Middlewares
        this.middlewares();        

        //Rutas
        this.routes();
    }

    async conectarMongo(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`La aplicación está corriendo en el puerto ${this.port}`);
          });
    }
}

module.exports = Server;