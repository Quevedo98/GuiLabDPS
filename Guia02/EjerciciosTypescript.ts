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
    deduccionessalariales():number
    {
     var total:number= this.salario*0.10;
     return total;
    }
}
let to = new Empleado("Luis",155);
let respu:number = to.deduccionessalariales();
console.log(`El sueldo es = ${respu}`);
//Ejercicio 4
class Calculadora
{
    numero1:number;
    numero2:number;
    constructor(numero1:number,numero2:number)
    {
        this.numero1=numero1;
        this.numero2=numero2;
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
   calculo():string
    {
        return "Suma:"+this.sumar()+"\n"+"Resta:"+this.resta()+"\n"+"Division:"+this.div()+"\n"+"Multiplicacion:"+this.mul()+"\n";
    }

}
let calculador = new Calculadora(10,5);
let respuestaf = calculador.calculo();
console.log("Las operaciones de los numero "+calculador.numero1+" y "+calculador.numero2+"\n"+respuestaf);