class Sockets{

    constructor(io){
        this.io = io;
        this.socketsEvents();   
    }

    socketsEvents(){

        //On connection
        this.io.on('connection', (socket) => {  
            console.log('Nueva conexión');
            //Escuchar el evento del cliente e imprimir la data.
            socket.on('mensaje-to-server',(data) =>{
                console.log(data.texto);
                this.io.emit('mensaje-from-server', data.texto);
            });

        });

    }


}

module.exports = Sockets;