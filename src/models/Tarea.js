export default class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.fueCompletada = false;
        this.fechaCreacion = new Date(Date.now());
        this.fechaCompletada = undefined;
    }
}