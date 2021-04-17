const Server = require('./models/server');
require('dotenv').config();
const server = new Server();

server.execute();





















/*
io.on('connection', (socket) => {  
    //console.log('Cliente conectado!');
    //console.log('Cliente conectado con id: ',socket.id);
    //Mensaje de bienvenida que emite el servidor.
    //socket.emit('mensaje-bienvenida','Bienvenido al server');
    socket.emit('mensaje-bienvenida',{
        msg: 'Bienvenido al server',
        fecha: new Date()
    });

    socket.on('Mensaje',(data) =>{
        console.log(data);
    })

    socket.on('mensaje-to-server',(data) =>{
        console.log(data.texto);

        //socket.emit('mensaje-from-server', data.texto);
        io.emit('mensaje-from-server', data.texto);
    });

    //Escuchar el evento del cliente e imprimir la data.
});*/

