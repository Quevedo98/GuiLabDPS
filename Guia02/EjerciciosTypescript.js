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
