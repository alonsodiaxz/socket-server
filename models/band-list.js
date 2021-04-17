const Band = require('./band');


class BandList{

    constructor(){

        this.bands = [
            new Band('Metallica'),
            new Band('Héroes del silencio'),
            new Band('Linking Park'),
            new Band('Breaking Benjamin')
        ];
    }

    addband (name){
        const newBand = new Band (name);
        this.bands.push(newBand); //Añadir a la lista de bandas, la nueva banda
        return this.bands;
    }

    removeBand( id ){
        //Es una especie de for, que va recorriendo la lista de bandas y tan solo deja las bandas cuyo id sea distinto que el que le pasamos como parámetro.
        this.bands = this.bands.filter( band => band.id !== id);
    }

    getBands(){
        return this.bands;
    }

    increaseVotes( id ){
        this.bands = this.bands.map( band => {

            if(band.id == id){
                band.votos += 1;
            }

            return band;
        });
   
    }

    changeName( id, newName ){
        this.bands = this.bands.map( band => {

            if(band.id == id){
                band.name = newName;
            }

            return band;
        });
   
    }


}

module.exports = BandList;