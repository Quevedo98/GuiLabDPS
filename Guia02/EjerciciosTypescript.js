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
    Empleado.prototype.deduccionessalariales = function (des) {
        var total;
        total = this.salario * des;
        return total;
    };
    return Empleado;
}());
//Ejercicio 4
var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.numero1 = n1;
        this.numero2 = n2;
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
        console.log("Suma:" + this.sumar());
        console.log("Resta:" + this.resta());
        console.log("Division:" + this.div());
        console.log("Multiplicacion:" + this.mul());
    };
    return Calculadora;
}());
