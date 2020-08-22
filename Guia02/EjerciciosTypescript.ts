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
class Empleado{
    nombre:string;
    salario:number;
    constructor(nombre:string,salario:number){
        this.nombre=nombre;
        this.salario=salario;

    }
    deduccionessalariales(des:number)
    {
     var total:number;
     total= this.salario*des;
     return total;
    }
}
//Ejercicio 4
class Calculadora
{
    numero1:number;
    numero2:number;
    constructor(n1:number,n2:number)
    {
        this.numero1=n1;
        this.numero2=n2;
    }
     sumar(): number {
        return this.numero1+this.numero2;
      }
       resta(): number {
        return this.numero1-this.numero2;
      }
      
       div(): number {
        return this.numero1/this.numero2;
      }
     
       mul(): number {
        return this.numero1*this.numero2;
      }
   calculo( )
    {
            
          console.log("Suma:"+this.sumar());
          console.log("Resta:"+this.resta());
          console.log("Division:"+this.div());
          console.log("Multiplicacion:"+this.mul());

    }

}