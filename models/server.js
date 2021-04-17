//Importando los paquetes
const express = require('express');
const http  = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server{

    constructor (){

        this.app = express();
        this.port = process.env.PORT;

        //Http  server
        this.Server = http.createServer(this.app);

        //Configuraciones de sockets del server
        this.io = socketio(this.Server, {/* Configuraciones */});

    }

    configurarSockets(){
        new Sockets(this.io);
    }

    middlewares(){
        //Desplegar el directorio público
        this.app.use(express.static(path.resolve(__dirname,'../public'))); 
    }
    execute(){
        //Inicializar middlewares
        this.middlewares();

        //Inicializar sockets
        this.configurarSockets();
        
        //Inicializar server
        this.Server.listen(this.port, () => {
            console.log('Server corriendo en puerto :', this.port);
        });
            
    }

}

module.exports = Server