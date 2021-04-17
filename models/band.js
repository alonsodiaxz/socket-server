const { v4: uuidv4 } = require('uuid');

class Band {

    constructor(name){

        this.id = uuidv4(); //Identificar por id
        this.name = name;
        this.votos = 0;

    }

}

module.exports = Band;