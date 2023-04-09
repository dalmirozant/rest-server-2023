const express = require('express');
const cors = require('cors');
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();        

        //Rutas
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg:'Corriendo API'
            });
          });
          
        this.app.put('/api', (req, res) => {
            res.json({
                ok: true,
                msg:'put API'
            });
          });
          
        this.app.post('/api', (req, res) => {
            res.json({
                ok: true,
                msg:'post API'
            });
          });
          
        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                msg:'delete API'
            });
          });
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`La aplicación está corriendo en el puerto ${this.port}`);
          });
    }
}

module.exports = Server;