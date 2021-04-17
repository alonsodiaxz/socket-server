const BandList = require('./band-list');

class Sockets{

    constructor(io){
        this.io = io;
        this.bandList = new BandList();
        this.socketsEvents();   
    }

    socketsEvents(){

        //On connection
        this.io.on('connection', (socket) => {  

            console.log('Cliente conectado');

            //Emitir al cliente conectado todas las bandas actuales.

            socket.emit('current-bands', this.bandList.getBands());
            socket.on('votar-banda', (id) =>{
                this.bandList.increaseVotes(id);
                this.io.emit('current-bands', this.bandList.getBands());
            });
            socket.on('borrar-app', (id) =>{
                this.bandList.removeBand(id);
                this.io.emit('current-bands', this.bandList.getBands());

            });
            socket.on('cambiarNombre', (data) =>{ //({id, nombre})
                this.bandList.changeName(data.id, data.nombre);
                this.io.emit('current-bands', this.bandList.getBands());

            });

            socket.on('crear-banda', ({nombre}) =>{
                this.bandList.addband(nombre);
                this.io.emit('current-bands', this.bandList.getBands());

            });
        });

    }


}

module.exports = Sockets;