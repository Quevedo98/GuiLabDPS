class Rombo{//Clase rombo con propiedades y metodo de setArea

    DiagonalVertical:number;
    DiagonalHorizontal:number;

    constructor(vertical:number,horizont:number){
        this.DiagonalVertical=vertical;
        this.DiagonalHorizontal=horizont; 
    }

    setArea():number{
        var resp:number = this.DiagonalVertical * this.DiagonalHorizontal;
        return resp;
    }
}
let romboNuevo = new Rombo(15,20);
let respuesta:number = romboNuevo.setArea();

console.log(`Area de la clase Rombo instanciada = ${respuesta}`);

//Ejercicio 2

interface Personaje{
    nombre:string;
    poderes:string[];
}

let nuevoPer:Personaje ={
    nombre:'Oscar',
    poderes:['trepar', 'Fuerza','Agilidad','telas de araña']
}

console.log(`Propiedad nombre de la interfaz = ${nuevoPer.nombre}`)

//Ejercicio 3
