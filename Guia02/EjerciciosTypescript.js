var Rombo = /** @class */ (function () {
    function Rombo(vertical, horizont) {
        this.DiagonalVertical = vertical;
        this.DiagonalHorizontal = horizont;
    }
    Rombo.prototype.setArea = function () {
        var resp = this.DiagonalVertical * this.DiagonalHorizontal;
        return resp;
    };
    return Rombo;
}());
var romboNuevo = new Rombo(15, 20);
var respuesta = romboNuevo.setArea();
console.log("Area de la clase Rombo instanciada = " + respuesta);
var nuevoPer = {
    nombre: 'Oscar',
    poderes: ['trepar', 'Fuerza', 'Agilidad', 'telas de araña']
};
console.log("Propiedad nombre de la interfaz = " + nuevoPer.nombre);
//Ejercicio 3
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    Empleado.prototype.deduccionessalariales = function () {
        var total = this.salario * 0.10;
        return total;
    };
    return Empleado;
}());
var to = new Empleado("Luis", 155);
var respu = to.deduccionessalariales();
console.log("El sueldo es = " + respu);
//Ejercicio 4
var Calculadora = /** @class */ (function () {
    function Calculadora(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }
    Calculadora.prototype.sumar = function () {
        return this.numero1 + this.numero2;
    };
    Calculadora.prototype.resta = function () {
        return this.numero1 - this.numero2;
    };
    Calculadora.prototype.div = function () {
        return this.numero1 / this.numero2;
    };
    Calculadora.prototype.mul = function () {
        return this.numero1 * this.numero2;
    };
    Calculadora.prototype.calculo = function () {
        return "Suma:" + this.sumar() + "\n" + "Resta:" + this.resta() + "\n" + "Division:" + this.div() + "\n" + "Multiplicacion:" + this.mul() + "\n";
    };
    return Calculadora;
}());
var calculador = new Calculadora(10, 5);
var respuestaf = calculador.calculo();
console.log("Las operaciones de los numero " + calculador.numero1 + " y " + calculador.numero2 + "\n" + respuestaf);
